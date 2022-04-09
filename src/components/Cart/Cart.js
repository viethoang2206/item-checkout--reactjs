import { useContext } from "react";
import {
  functionContext,
  setStateFunctionContext,
  stateContext,
} from "../Context/Context";

import "./Cart.scss";
const Cart = () => {
  const StateContext = useContext(stateContext);
  const FunctionContext = useContext(functionContext);

  return (
    <div className="cart">
      <h1>Shopping cart</h1>
      <div className="cart-info">
        <div className="cart-display">
          {StateContext.items.length ? (
            StateContext.items.map((val) => (
              <div key={val.id} className="description">
                <button onClick={() => FunctionContext.handleDelete(val.id)}>
                  <i className="fa-solid fa-rectangle-xmark"></i>
                </button>
                <p>{val.name}</p>
              </div>
            ))
          ) : (
            <div className="description">
              <p>No items</p>
            </div>
          )}
        </div>
        <p className="cost">Total: {StateContext.total} EUR</p>
      </div>
    </div>
  );
};
export default Cart;
