import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchPanel } from "../../components";
import { getSearchLine } from "../../data/selectors/getSearchLine";
import {
  createClearSearchOrdersLine,
  createSetSearhOrdersLine,
  createSearch,
} from "../../data/creators/searchLine";

import {
  clearFiltredOrders,
  setCurrentPage,
  setFiltredOrders,
} from "../../data/creators/orders";

import { ENTER_CODE } from "../../data/constants";

// let timer = null;

export const SearchContainer = () => {
  const searchLine = useSelector(getSearchLine);
  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { value } }) => {
    dispatch(createSetSearhOrdersLine(value));
    dispatch(setCurrentPage(1));

    // TODO: дописать запрос на сервер
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   dispatch({
    //     type: 'Отфильтруй',
    //     payload: value
    //   });
    // }, 500);
  };

  const handleClearSearch = () => {
    dispatch(createClearSearchOrdersLine());
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === ENTER_CODE) {
      dispatch(createSearch(getSearchLine));
    }
  };

  const initialStateFilter = {
    dateFrom: "",
    dateTo: "",
    sumFrom: "",
    sumTo: "",
    status: [],
  };

  const [filter, setFilter] = useState(initialStateFilter);

  const handleSetFilter = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleClearFilter = ({ target: { name } }) => {
    setFilter({
      ...filter,
      [name]: "",
    });
  };

  const handleCreateFilter = () => {
    dispatch(setFiltredOrders(filter));
  };

  const handleResetFilter = () => {
    setFilter(initialStateFilter);
    dispatch(clearFiltredOrders());
  };

  const handleSetStatusFilter = ({ target: { name, checked } }) => {
    if (checked) {
      filter.status.push(name);
    } else {
      const indexOfName = filter.status.indexOf(name);
      if (indexOfName >= 0) {
        filter.status.splice(indexOfName, 1);
      }
    }

    setFilter({
      ...filter,
    });
  };

  return (
    <SearchPanel
      onChangeSearch={handleChangeSearch}
      onClearSearch={handleClearSearch}
      onSetFilter={handleSetFilter}
      onClearFilter={handleClearFilter}
      onSetStatusFilter={handleSetStatusFilter}
      onCreateFilter={handleCreateFilter}
      onResetFilter={handleResetFilter}
      onKeyDown={handleKeyDown}
      value={searchLine}
      filter={filter}
    />
  );
};
