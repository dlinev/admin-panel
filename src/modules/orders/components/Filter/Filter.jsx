import styles from "./Filter.module.css";

export const Filter = () => {
  return (
    <div className="filter header__filter">
      <div className="filter__search">
        <div className="filter__input"></div>
        <div className="filter__link"></div>
      </div>
      <div className="filter__load"></div>
    </div>
  );
};
