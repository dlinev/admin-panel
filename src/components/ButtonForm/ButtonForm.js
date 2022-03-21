import React, { Component } from 'react';
import styles from './ButtonForm.module.css'; 
import { ButtonBlock } from '../buttonBlock/buttonBlock'

class ButtonForm extends Component {

    render() {
        return  (
            <div className={styles.frame}>
                <div className={styles.column}>
                    <ButtonBlock theme='default' size='big' /> 
                    <ButtonBlock theme='default' size='small' /> 
                </div>
                <div className={styles.column}>
                    <ButtonBlock theme='flat' size='big' /> 
                    <ButtonBlock theme='flat' size='small' /> 
                </div>
                <div className={styles.column}>
                    <ButtonBlock theme='disabled' size='big' /> 
                </div>
            </div>

    )}
}
export default ButtonForm;