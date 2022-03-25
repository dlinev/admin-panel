import React, { Component } from 'react';

import { SearchBar } from '../components';

import styles from './searchbarForm.module.css'; 

class SearchBarForm extends Component {

    render() {
        return  <div className={styles.frame}>
                    <SearchBar placeholder='Номер заказа или ФИО'/>
                    <SearchBar placeholder='Номер заказа или ФИО' value='что-то ищем тут'/>
                </div>
  }
}
export default SearchBarForm;