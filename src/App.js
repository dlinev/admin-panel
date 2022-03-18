import './styles/reset.css';
import './styles/index.css';

import InputForm          from './components/InputForm/InputForm';
import ButtonForm         from './components/ButtonForm/ButtonForm';
import SearchBarForm      from './components/SearchBarForm/SearchBarForm';
import CheckboxRadioForm  from './components/CheckboxRadioForm/CheckboxRadioForm';
import DropdownForm       from './components/DropdownForm/DropdownForm';


function App() {
  return (
    <div className="wrapper">
      <InputForm />
      <ButtonForm />
      <SearchBarForm />
      <CheckboxRadioForm />
      <DropdownForm />
    </div>
  );
}

export default App;