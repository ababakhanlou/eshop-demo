import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket as addToBasketAction } from "../actions/checkout";
import { updateStock } from "../services/setStock";
import {
  StyledTile,
  StyledButton,
  StyledImage,
  StyledDetails,
  StyledLink,
  StyledOutOfStock,
} from "./ProductTile.styles";

function ProductTile({ product }) {
  const dispatch = useDispatch();

  const addToBasket = async ({ title, price, _id }) => {
    const shouldAdd = await updateStock(_id, -1);
    if (shouldAdd) {
      setTimeout(() => dispatch(addToBasketAction(title, price, _id)), 180);
    }
  };

  return (
    <StyledLink to={`product/${product.productId}`}>
      <StyledTile>
        <StyledImage src={`./data/${product.image[0]}`} alt="img" />
        <StyledDetails>
          <div>{product.title}</div>
          <div>£{product.price}</div>
        </StyledDetails>

        {product.availQty === 0 ? (
          <StyledOutOfStock>OUT OF STOCK</StyledOutOfStock>
        ) : (
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              addToBasket(product);
            }}
          >
            Add to Basket
          </StyledButton>
        )}
      </StyledTile>
    </StyledLink>
  );
}

export default ProductTile;
