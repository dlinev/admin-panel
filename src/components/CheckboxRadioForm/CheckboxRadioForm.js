import React, { Component } from 'react';
import styles from './CheckboxRadioForm.module.css'; 
import { CheckboxRadio } from '../components'

class CheckboxRadioForm extends Component {

    render() {
        return (
            <>
                <div className={styles.frame}>
                    <CheckboxRadio type='checkbox'/>
                </div>
                <div className={styles.frame}>
                    <CheckboxRadio type='radio'/>
                </div>
            </>
    )}
}
export default CheckboxRadioForm;