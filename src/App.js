import { Header, Filter, Main, Search } from "./modules/orders/components";

import "./styles/reset.css";
import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <Filter />
      <Main />
    </div>
  );
}
export default App;
