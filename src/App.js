import { Header, Filter, Main } from "./orders/components";

import "./styles/reset.css";
import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Filter />
      <Main />
    </div>
  );
}
export default App;
