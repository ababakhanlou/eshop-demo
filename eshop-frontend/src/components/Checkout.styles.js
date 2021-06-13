import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCheckout = styled.div`
  width: 100%;
  padding-left: 10px;
  color: black;
`;

export const StyledCheckoutHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
  h2,
  h3 {
    margin: 3px;
  }
  margin-bottom: 10px;
`;

export const StyledItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledItem = styled.div`
  color: black;
  padding: 10px;
  width: 260px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 3px;
  outline: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 5px;
  justify-content: space-between;
  background-color: white;
`;

export const StyledActions = styled.div`
  color: black;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border-radius: 15px;
    border: 1px solid white;
    background-color: darkred;
    color: white;
    height: 30px;
    width: 30px;
    font-weight: 900;
    margin: 5px;
    outline: none;

    transition-duration: 0.4s;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    &:after {
      content: "";
      background: white;
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -20px !important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s;
    }

    &:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }

    &:focus {
      outline: 0;
    }
  }
`;

export const StyledRemove = styled.button`
  background-color: darkred;
  color: white;
  width: 100%;
  font-weight: 900;
  border: none;
  margin-top: 2px;
  border-radius: 10px;
  padding: 5px;
  font-family: raleway, "Open-Sans", sans-serif;
  outline: none;
`;

export const StyledLink = styled(Link)`
  :visited {
    color: inherit;
  }
  display: flex;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 900;
  align-self: flex-start;
  margin-bottom: 10px;
  width: 280px;
  height: 25px;
`;

export const StyledOutOfStock = styled.div`
  color: red;
`;
