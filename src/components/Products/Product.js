import { useContext, useState } from "react";
import {
  functionContext,
  setStateFunctionContext,
  stateContext,
} from "../Context/Context";

import "./Product.scss";
const Product = () => {
  const StateContext = useContext(stateContext);

  const FunctionContext = useContext(functionContext);

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="row">
        {StateContext.data.map((val, index) => (
          <div key={val.id} className="col-sm-4">
            <div className="product">
              <img src={val.img} alt="" />
              <h3>{val.name}</h3>
              <div className="info">
                <p>{val.price}EUR</p>
                <button
                  onClick={() => {
                    FunctionContext.handleClick(val.id);
                  }}
                >
                  {StateContext.button[index] ? "Remove" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
