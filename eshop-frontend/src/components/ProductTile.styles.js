import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTile = styled.div`
  padding: 5px;
  height: 280px;
  width: 280px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black;
  border: 1px solid gray;
  border-radius: 3px;
  margin: 5px;
  justify-content: center;
  text-decoration: none;
  justify-content: space-between;
  background-color: white;
`;

export const StyledButton = styled.button`
  background-color: darkred;
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  padding: 12px;
  margin-top: 25px;
  font-family: raleway, "Open-Sans", sans-serif;
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
`;

export const StyledImage = styled.img`
  height: 140px;
  width: 230px;
  align-self: center;
  text-decoration: none;
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  :visited {
    color: inherit;
  }
  text-decoration: none;
`;

export const StyledOutOfStock = styled.div`
  background-color: darkred;
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  padding: 12px;
  margin-top: 25px;
  font-family: raleway, "Open-Sans", sans-serif;
  outline: none;
`;
