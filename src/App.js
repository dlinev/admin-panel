import {
  HeaderContainer,
  MainContainer,
  SearchContainer,
} from "./modules/orders/containers";

import "./styles/reset.css";
import "./styles/App.css";

export const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <SearchContainer />
      <MainContainer />
    </div>
  );
};
