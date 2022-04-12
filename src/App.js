import {
  HeaderContainer,
  FilterContainer,
  MainContainer,
  SearchContainer,
} from "./modules/orders/containers";

import "./styles/reset.css";
import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <SearchContainer />
      <FilterContainer />
      <MainContainer />
    </div>
  );
}
export default App;
