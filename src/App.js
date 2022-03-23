import './styles/reset.css';
import './styles/index.css';

import InputForm          from './components/inputForm/inputForm';
import ButtonForm         from './components/buttonForm/buttonForm';
import SearchBarForm      from './components/searchbarForm/searchbarForm';
import CheckboxRadioForm  from './components/checkboxRadioForm/checkboxRadioForm';
import DropdownForm       from './components/dropdownForm/dropdownForm';
import { SearchBar, Input, Label } from './components/components';



function App() {
  return (
    <div className="wrapper">
      <InputForm />
      {/* <SearchBarForm />
      <CheckboxRadioForm />
      <ButtonForm />
      <DropdownForm /> */}
      <Label text='Ghjdthrf'>
      <Input type='text' value='1' />
      <Input type='text' value='1' />
      <Input type='text' value='1' />
      <Input type='text' value='1' />
      </Label>
      <Label text='---'>
        <Input type='text' value='2' />
      </Label>
      <Label text='+++++'>
        <Input type='text' value='3' />
      </Label>
    </div>
  );
}

export default App;