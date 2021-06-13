import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import { getStock } from "./services/getData";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";
import ItemPage from "./components/ItemPage";
import { getBasketItemCount } from "./selector/checkout";

const StyledApp = styled.div`
  font-family: raleway, "Open-Sans", sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledMainBody = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-top: 10px;
  flex-grow: 2;
`;

function App() {
  const basketCount = useSelector(getBasketItemCount);
  const [stock, setStock] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const stock = await getStock();
      setStock(stock);
    };
    getData();
  }, [basketCount]);

  return (
    <Router>
      <StyledApp>
        <TopBar />
        <StyledMainBody>
          <Switch>
            <Route exact path="/">
              <ProductPage stock={stock} />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/product/:id">
              <ItemPage />
            </Route>
          </Switch>
        </StyledMainBody>
      </StyledApp>
    </Router>
  );
}

export default App;
