import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <h2>Your basket is empty</h2>
        ) : (
          <div>
            <h2 className="checkout__title">Your basket:</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        {
          basket?.length > 0 && (
            <div className="checkout__right">
              <Subtotal/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Checkout;
