import { Link } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const StyledItemPage = styled.div`
  width: 100%;
  margin-left: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
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

export const StyledItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-right: 100px;
`;

export const StyledPrice = styled.h2`
  margin-right: 50px;
`;

export const StyledDescription = styled.p`
  width: 90%;
  padding-right: 5px;
  align-self: flex-end;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCarousel = styled(Carousel)`
  align-self: center;
  text-decoration: none;
  height: 30%;
  max-width: 55%;
  min-width: 325px;
  padding-right: 25px;
  @media only screen and (max-width: 850px) {
    max-width: 100%;
  }
`;

export const StyledButton = styled.button`
  background-color: darkred;
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  padding: 12px;

  font-family: raleway, "Open-Sans", sans-serif;
  outline: none;
  height: 40px;
  width: 120px;

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

export const StyledOutOfStock = styled.div`
  background-color: darkred;
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-family: raleway, "Open-Sans", sans-serif;
  outline: none;
  height: 18px;
  width: 115px;
`;
