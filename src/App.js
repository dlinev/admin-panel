import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrders } from "./modules/orders/data/creators/orders";

import {
  HeaderContainer,
  MainContainer,
  SearchContainer,
} from "./modules/orders/containers";

import "./styles/reset.css";
import "./styles/App.css";

export const App = () => {
  const dispatch = useDispatch();

  const handleLoad = () => {
    dispatch(getOrders());
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="wrapper">
      <HeaderContainer />
      <SearchContainer />
      <MainContainer />
    </div>
  );
};
