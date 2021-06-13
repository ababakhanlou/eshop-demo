import React from "react";
import styled from "styled-components";
import ProductTile from "./ProductTile";

const StyledProductPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 3px;
  height: fit-content;
`;

const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 3px;
  height: fit-content;
  justify-content: center;
  align-self: center;
  align-content: center;
`;

function ProductPage({ stock }) {
  return (
    <StyledProductPage>
      <StyledItems>
        {stock.map((item, index) => (
          <ProductTile product={item} key={index} />
        ))}
      </StyledItems>
    </StyledProductPage>
  );
}

export default ProductPage;
