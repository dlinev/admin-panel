import React, { Component } from 'react';
import styles from './InputForm.module.css'; 
import Input from '../input/input'

class InputForm extends Component {

    render() {
        return  <div className={styles.frame}>
                    <Input />
                    <Input 
                        value='06.12.2021' 
                        isError={true}
                        srcButtonImage='AbortIcon'
                    />
                    <Input 
                        value='06.12.2021' 
                        disabled={true}
                        srcImage='SearchIcon'
                    />
                </div>
  
  }
}
export default InputForm;