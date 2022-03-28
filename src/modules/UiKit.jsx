import "../styles/reset.css";
import "../styles/index.css";

import { InputForm } from "./InputForm/InputForm";
import { SearchbarForm } from "./SearchbarForm/SearchbarForm";
import { CheckboxRadioForm } from "./CheckboxRadioForm/CheckboxRadioForm";
import { ButtonForm } from "./ButtonForm/ButtonForm";
import { DropdownForm } from "./DropdownForm/DropdownForm";

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
