import logo from "./logo.svg";
import "./App.scss";

import data from "../src/api";

import { useContext, useState } from "react";
import { useEffect } from "react";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import {
  stateContext,
  setStateFunctionContext,
  functionContext,
} from "./components/Context/Context";
function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [button, setButton] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const handleDelete = (id) => {
    const product = data.find((val) => val.id === id);
    const newItem = items.filter((val) => {
      if (val.id !== product.id) {
        return val;
      }
    });
    setItems(newItem);

    console.log(items);
  };
  const handleClick = (id) => {
    const newIdx = data.filter((val) => val.id === id);

    if (!items.length) {
      setItems(newIdx);

      console.log(items);
    } else if (items.length) {
      if (items.includes(...newIdx)) {
        handleDelete(id);
      } else {
        setItems([...newIdx, ...items]);
      }
    }
  };
  const handleButton = () => {
    const newItem = data.map((val, index) => {
      if ([...items].includes(val)) {
        return true;
      } else {
        return false;
      }
    });
    setButton(newItem);
    //console.log(newItem);
  };
  useEffect(() => {
    if (items.length) {
      const total = items.reduce((acc, val) => {
        return acc + +val.price;
      }, 0);
      setTotal(total);
    } else {
      setTotal(0);
    }

    handleButton();
  }, [items]);

  return (
    <div className="App">
      <stateContext.Provider value={{ items, button, total, data }}>
        <functionContext.Provider
          value={{ handleClick, handleDelete, handleButton }}
        >
          <setStateFunctionContext.Provider
            value={{ setItems, setTotal, setButton }}
          >
            <div className="shopping">
              <Product></Product>
              <Cart></Cart>
            </div>
          </setStateFunctionContext.Provider>
        </functionContext.Provider>
      </stateContext.Provider>
    </div>
  );
}

export default App;
