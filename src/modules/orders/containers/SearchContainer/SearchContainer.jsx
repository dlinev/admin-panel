import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchPanel } from "../../components";
import { getSearchLine } from "../../data/selectors/searchLine";
import {
  createClearSearchOrdersLine,
  createSetSearhOrdersLine,
  createSearch,
} from "../../data/creators/searchLine";

import { getOrders } from "../../data/creators/orders";

import { ENTER_CODE } from "../../data/constants";

// let timer = null;

export const SearchContainer = () => {
  const searchLine = useSelector(getSearchLine);
  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { value } }) => {
    dispatch(createSetSearhOrdersLine(value));

    // TODO: дописать запрос на сервер
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   dispatch({
    //     type: 'Отфильтруй',
    //     payload: value
    //   });
    // }, 500);
  };

  const handleClear = () => {
    dispatch(createClearSearchOrdersLine());
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === ENTER_CODE) {
      dispatch(createSearch(searchLine));
    }
  };

  const handleLoad = () => {
    dispatch(getOrders());
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <SearchPanel
      onChange={handleChangeSearch}
      onClear={handleClear}
      onKeyDown={handleKeyDown}
      value={searchLine}
    />
  );
};
