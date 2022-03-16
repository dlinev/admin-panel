import { InputBlock,
         SearchBarBlock,
         CheckboxRadioBlock,
         ButtonBlock,
         DropdownBlock
        } from './components/components';

import './styles/reset.css';        
import './styles/index.css';

function App() {
  return (
    <div className="wrapper">
      <InputBlock />
      <SearchBarBlock />
      <CheckboxRadioBlock />
      <ButtonBlock />
      <DropdownBlock />
    </div>
    );
}

export default App;

