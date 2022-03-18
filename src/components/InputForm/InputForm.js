import React, { Component } from 'react';
import styles from './InputForm.module.css'; 
import { Input } from '../components'

class InputForm extends Component {

    render() {
        return  <div className={styles.frame}>
                    <Input />
                    <Input 
                        value='06.12.2021' 
                        isError={true}
                        buttonIconName='XMediumIcon'
                    />
                    <Input 
                        value='06.12.2021' 
                        disabled={true}
                        iconName='SearchIcon'
                    />
                </div>
  
  }
}
export default InputForm;