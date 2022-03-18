import React, { Component } from 'react';
import styles from './SearchBarForm.module.css'; 

import { SearchBar } from '../components';

class SearchBarForm extends Component {

    render() {
        return  <div className={styles.frame}>
                    <SearchBar icon='SearchIcon'/>
                    <SearchBar iconButton='XMediumIcon' icon='SearchIcon' />
                </div>
  }
}
export default SearchBarForm;