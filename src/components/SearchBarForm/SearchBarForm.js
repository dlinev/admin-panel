import React, { Component } from 'react';
import styles from './SearchBarForm.module.css'; 

import { SearchBar } from '../components';

class SearchBarForm extends Component {

    render() {
        return  <div className={styles.frame}>
                    <SearchBar iconName='SearchIcon'/>
                    <SearchBar iconButtonName='XMediumIcon' iconName='SearchIcon' value='50744'/>
                </div>
  }
}
export default SearchBarForm;