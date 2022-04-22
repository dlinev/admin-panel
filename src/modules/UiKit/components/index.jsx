import "../styles/reset.css";
import "../styles/index.css";

import { InputForm } from "./modules/InputForm/InputForm";
import { SearchbarForm } from "./modules/SearchbarForm/SearchbarForm";
import { CheckboxRadioForm } from "./modules/CheckboxRadioForm/CheckboxRadioForm";
import { ButtonForm } from "./modules/ButtonForm/ButtonForm";
import { DropdownForm } from "./modules/DropdownForm/DropdownForm";

export const UiKit = () => {
  return (
    <div className="wrapper">
      <InputForm />
      <SearchbarForm />
      <CheckboxRadioForm />
      <ButtonForm />
      <DropdownForm />
    </div>
  );
};
