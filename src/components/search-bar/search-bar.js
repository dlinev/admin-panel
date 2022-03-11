import React, { Component } from 'react';
import stylesInput from '../input/input.module.css'; 
import styles from './search-bar.module.css'; 


class SearchBar extends Component {
    showIcon(){
      return <svg
                className={styles.searchBar__img}
                viewBox="0 0 16 16"
                fill="none"
                stroke="#459DF5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                  fill="none"
                />
              </svg>
    }
    showButton(){
        return <button className={stylesInput.inputButton}>
                <svg
                  class={stylesInput.inputButton__img}
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#BAD8F5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                </svg>
              </button>

    }
    showLabel(){
      <div className={styles.searchbarLabel__text}>{this.props.labelText}</div>
    }
    render() {
        return <div className={styles.searchBar}>
                  {this.props.showLabel==='true' ? this.showLabel() : ''}
                  <input
                    className={`${stylesInput.inputBlock} ${styles.searchBar__input}`}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.inputValue}
                    />
                      {this.props.showIcon==='true' ? this.showIcon() : ''}
                      {this.props.showButton==='true' ? this.showButton() : ''}
                </div>
  }
}
export default SearchBar;    