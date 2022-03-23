import React, { Component } from 'react';
import styles from './checkboxRadioForm.module.css'; 
import { RadioBlock, CheckboxBlock } from '../components'

class CheckboxRadioForm extends Component {

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.frame}>
                    <CheckboxBlock 
                        className={styles.block}
                        arrItems={[
                            { id:'checkbox_1' },
                            { id:'checkbox_2', checked: true},
                        ]} 
                    />
                </div>
                <div className={styles.frame}>
                    <RadioBlock 
                        className={styles.block}
x                       name='radioGroup1'
                        arrItems={[
                            { id:'radio_1', value:'radio1', checked: true },
                            { id:'radio_2', value:'radio2'},
                    ]} />
                </div>
            </div>
    )}
}
export default CheckboxRadioForm;