import './styles/reset.css';
import './styles/index.css';

import { InputForm }          from './components/InputForm/InputForm';
import { SearchbarForm }      from './components/SearchbarForm/SearchbarForm';
import { CheckboxRadioForm }  from './components/CheckboxRadioForm/CheckboxRadioForm';
import { ButtonForm }         from './components/ButtonForm/ButtonForm';
import { DropdownForm }       from './components/DropdownForm/DropdownForm';



function App() {
  return (
    <div className="wrapper">
      <InputForm />
      <SearchbarForm />
      <CheckboxRadioForm />
      <ButtonForm />
      <DropdownForm />
    </div>
  );
}

export default App;