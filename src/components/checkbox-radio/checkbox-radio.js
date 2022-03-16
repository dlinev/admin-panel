import React, { Component } from 'react';
import styles from './checkbox-radio.module.css'; 


class CheckboxRadioBlock extends Component {    
    render() {
        return  <div>
        <div className="frame frame_checkboxRadio">

          <div className={styles.checkboxBlock}>
            <div className={styles.checkbox}>
              <input className={styles.customCheckbox} type="checkbox" id="checkbox1" />
              <label for="checkbox1"></label>
            </div>
            <div className={styles.checkbox}>
              <input
                className={styles.customCheckbox}
                type="checkbox"
                id="checkbox2"
              />
              <label for="checkbox2"></label>
            </div>
          </div>
      </div>
  
      <div className="frame frame_checkboxRadio">
        <div className={styles.radioBlock}>
          <div className={styles.radio}>
            <input
              className={styles.customRadio}
              id="radio1"
              type="radio"
              name="radiogroup"
              value="radio1"
            />
            <label for="radio1"></label>
          </div>
          <div className={styles.radio}>
            <input
              className={styles.customRadio}
              id="radio2"
              type="radio"
              name="radiogroup"
              checked
              value="radio2"
            />
            <label for="radio2"></label>
          </div>
        </div>
      </div>
      </div>  
  }
}
export default CheckboxRadioBlock;
