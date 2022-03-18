import React, { Component } from 'react';
import styles from './ButtonForm.module.css'; 
import { Button } from '../components'

class ButtonForm extends Component {

    render() {
        return  (
            <div className={styles.frame}>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <Button theme='default' size='big' iconName='SearchIcon'  text='Text here' />
                        <Button theme='default' size='big' text='Text here' />
                        <Button theme='default' size='big' iconName='SearchIcon' />
                    </div>
                    <div className={styles.buttonBlock}>
                        <Button theme='default' size='small' iconName='SearchIcon' text='Text here'/>
                        <Button theme='default' size='small' text='Text here' />
                        <Button theme='default' size='small' iconName='SearchIcon' />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <Button theme='flat' size='big' iconName='SearchIcon' text='Text here' />
                        <Button theme='flat' size='big' text='Text here'/>
                        <Button theme='flat' size='big' iconName='SearchIcon'/>
                    </div>
                    <div className={styles.block}>
                        <Button theme='flat' size='small' siconName='SearchIcon' text='Text here' />
                        <Button theme='flat' size='small' text='Text here' />
                        <Button theme='flat' size='small' iconName='SearchIcon' />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <Button theme='disabled' size='big' iconName='SearchIcon' text='Text here' />
                        <Button theme='disabled' size='big' text='Text here' />
                        <Button theme='disabled' size='big' iconName='SearchIcon' />
                    </div>
                </div>
            </div>

    )}
}
export default ButtonForm;