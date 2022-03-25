import './styles/reset.css';
import './styles/index.css';

import InputForm          from './components/inputForm/inputForm';
import SearchBarForm      from './components/searchbarForm/searchbarForm';
import CheckboxRadioForm  from './components/checkboxRadioForm/checkboxRadioForm';

// import ButtonForm         from './components/buttonForm/buttonForm';
// import DropdownForm       from './components/dropdownForm/dropdownForm';



function App() {
  return (
    <div className="wrapper">
      <InputForm />
      <SearchBarForm />
      <CheckboxRadioForm />
      {/* <ButtonForm />
      <DropdownForm /> */}
    </div>
  );
}

export default App;