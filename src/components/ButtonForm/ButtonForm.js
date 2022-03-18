import React, { Component } from 'react';
import styles from './ButtonForm.module.css'; 
import { ButtonBlock } from '../buttonBlock/buttonBlock'

class ButtonForm extends Component {

    render() {
        return  (
            <div className={styles.frame}>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <ButtonBlock theme='default' size='big' /> 
                    </div>
                    <div className={styles.buttonBlock}>
                        <ButtonBlock theme='default' size='small' /> 
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <ButtonBlock theme='flat' size='big' /> 
                    </div>
                    <div className={styles.block}>
                        <ButtonBlock theme='flat' size='small' /> 
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <ButtonBlock theme='disabled' size='big' /> 
                    </div>
                </div>
            </div>

    )}
}
export default ButtonForm;