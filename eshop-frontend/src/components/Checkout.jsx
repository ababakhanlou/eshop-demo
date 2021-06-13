import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket as addToBasketAction,
  removeFromBasket as removeFromBasketAction,
  deductFromBasket as deductFromBasketAction,
} from "../actions/checkout";
import { getBasketTotal } from "../selector/checkout";
import { updateStock } from "../services/setStock";
import { getItemById } from "../services/getData";
import {
  StyledCheckout,
  StyledCheckoutHeading,
  StyledItemList,
  StyledItem,
  StyledActions,
  StyledRemove,
  StyledLink,
  StyledOutOfStock,
} from "./Checkout.styles";

function Checkout() {
  const basket = useSelector((state) => state.basket);
  const [outOfStock, setOutOfStock] = useState([]);

  useEffect(() => {
    const calcStock = async () => {
      basket.forEach((item) => {
        if (!inStockCheck(item.id)) {
          setOutOfStock([...outOfStock, item.id]);
        } else {
          const filteredStock = outOfStock.filter((id) => id !== item.id);
          setOutOfStock(filteredStock);
        }
      });
    };
    calcStock();
    // eslint-disable-next-line
  }, [basket]);

  const inStockCheck = async (id) => {
    const item = await getItemById(id);
    if (item.availQty === 0) {
      return false;
    }
    return true;
  };

  const dispatch = useDispatch();

  const addToBasket = async ({ item, price, id }) => {
    const shouldAdd = await updateStock(id, -1);
    if (shouldAdd) {
      const addToBasketTimeout = setTimeout(() => {
        dispatch(addToBasketAction(item, price, id));
        clearTimeout(addToBasketTimeout);
      }, 200);
    } else {
      setOutOfStock([...outOfStock, id]);
    }
  };

  const removeFromBasket = async ({ item, id }) => {
    const itemBasket = basket.find((item) => item.id === id);
    updateStock(id, itemBasket.qty);
    inStockCheck(id);
    setTimeout(() => dispatch(removeFromBasketAction(item)), 200);
  };

  const deductFromBasket = async ({ item, id }) => {
    updateStock(id, 1);
    inStockCheck(id);
    setTimeout(() => dispatch(deductFromBasketAction(item)), 200);
  };

  const totalPrice = useSelector(getBasketTotal);
  const getSubTotal = (price, qty) => {
    let sub = price * qty;
    return sub.toFixed(2);
  };

  return (
    <StyledCheckout>
      <StyledCheckoutHeading>
        <StyledLink to="/">{"<"} Back to store</StyledLink>

        <h2>Welcome to the checkout</h2>
        <h3>Please review your basket</h3>
        <h3>Total Price £{totalPrice}</h3>
      </StyledCheckoutHeading>
      <StyledItemList>
        {basket.map((item, index) => (
          <StyledItem key={index}>
            <div>
              {item.item} : £{item.price}
            </div>
            <div> SubTotal: £{getSubTotal(item.price, item.qty)}</div>

            <StyledActions>
              <button onClick={() => deductFromBasket(item)}>-</button>
              <div>Qty: {item.qty}</div>

              {outOfStock.includes(item.id) && (
                <StyledOutOfStock> OUT OF STOCK</StyledOutOfStock>
              )}

              <button onClick={() => addToBasket(item)}>+</button>
            </StyledActions>

            <StyledRemove onClick={() => removeFromBasket(item)}>
              Remove From Basket
            </StyledRemove>
          </StyledItem>
        ))}
      </StyledItemList>
    </StyledCheckout>
  );
}

export default Checkout;
