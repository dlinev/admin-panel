import React, { Component } from 'react';
import styles from './inputForm.module.css'; 
import { InputBlock } from '../components';

class InputForm extends Component {

    render() {
        return  <div className={styles.frame}>
                    <InputBlock />
                    <InputBlock 
                        value='06.12.2021' 
                        isError={true}
                        iconButton='XMediumIcon'
                    />
                    <InputBlock 
                        value='06.12.2021' 
                        disabled={true}
                        icon='LockedIcon'
                    />
                </div>
  
  }
}
export default InputForm;