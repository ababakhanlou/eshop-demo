import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getBasketItemCount } from "../selector/checkout";

const StyledBasketCount = styled.i`
  font-weight: bold;
  font-size: 15px;
  color: white;
`;

const StyledLink = styled(Link)`
  :visited {
    color: inherit;
  }
  text-decoration: none;
`;

function Basket() {
  const basketCount = useSelector(getBasketItemCount);

  return (
    <StyledLink to="/checkout">
      <div>
        <StyledBasketCount>
          <div>Your Basket</div>
          <div>({basketCount} Items)</div>
        </StyledBasketCount>
      </div>
    </StyledLink>
  );
}

export default Basket;
