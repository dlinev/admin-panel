import React, { Component } from 'react';
import styles from './dropdown.module.css'; 


class Dropdown extends Component {
    render() {
        return <div className={styles.dropdown}>
                <label className={styles.dropdown__label}>
                  <div className={styles.dropdown__item}>
                    <input className={styles.dropdown__input} 
                           type={this.props.type}/>
                    <svg  className={styles.dropdown__img} 
                          viewBox="0 0 16 16" 
                          fill="#FFF" 
                          stroke="none">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                  </div>
                  <div className={styles.dropdown__text}>{this.props.itemText}</div>
                </label>
              </div>

  }
}
export default Dropdown;