import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBasketItemCount } from "../selector/checkout";
import { addToBasket as addToBasketAction } from "../actions/checkout";
import { getItemByProdId } from "../services/getData";
import { updateStock } from "../services/setStock";
import {
  StyledItemPage,
  StyledLink,
  StyledItemActions,
  StyledPrice,
  StyledDescription,
  StyledContent,
  StyledCarousel,
  StyledButton,
  StyledOutOfStock,
} from "./ItemPage.styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ItemPage() {
  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  const [inStock, setInStock] = useState(true);
  const basketCount = useSelector(getBasketItemCount);

  const location = useLocation().pathname;

  useEffect(() => {
    const getData = async (productId) => {
      const stock = await getItemByProdId(productId);
      setItem(stock);

      const imgPaths = stock.image.map((img) => `./data/${img}`);
      setImages(imgPaths);
    };
    const productId = location.replace("/product/", "");
    getData(productId);

    if (item.availQty > 0) {
      setInStock(true);
    }
  }, [basketCount]);

  const dispatch = useDispatch();

  const addToBasket = async ({ title, price, _id }) => {
    const shouldAdd = await updateStock(_id, -1);
    if (shouldAdd) {
      setTimeout(() => dispatch(addToBasketAction(title, price, _id)), 200);
    } else {
      setInStock(false);
    }
  };

  return (
    <StyledItemPage>
      <StyledLink to="/">{"<"} Back to store</StyledLink>
      <h1>{item.title}</h1>
      <StyledItemActions>
        <StyledPrice>£{item.price}</StyledPrice>

        {item.availQty === 0 || !inStock ? (
          <StyledOutOfStock>OUT OF STOCK</StyledOutOfStock>
        ) : (
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              addToBasket(item);
            }}
          >
            Add to Basket
          </StyledButton>
        )}
      </StyledItemActions>

      <StyledContent>
        <StyledDescription>{item.description}</StyledDescription>
        <StyledCarousel showThumbs={false} infiniteLoop={true}>
          {images.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={item.title} />
            </div>
          ))}
        </StyledCarousel>
      </StyledContent>
    </StyledItemPage>
  );
}

export default ItemPage;
