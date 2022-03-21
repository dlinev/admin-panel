import React, { Component } from 'react';
import styles from './CheckboxRadioForm.module.css'; 
import { RadioBlock, CheckboxBlock } from '../components'

class CheckboxRadioForm extends Component {

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.frame}>
                    <CheckboxBlock arrItems={[
                        { id:'checkbox_1' },
                        { id:'checkbox_2', checked:false},
                    ]} />
                </div>
                <div className={styles.frame}>
                    <RadioBlock arrItems={[
                        { id:'radio_1', value:'radio_group' },
                        { id:'radio_2', value:'radio_group', checked:true},
                    ]} />
                </div>
            </div>
    )}
}
export default CheckboxRadioForm;