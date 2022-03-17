import React, { Component } from 'react';
import styles from './ButtonForm.module.css'; 
import Button from '../button/button'

import { ReactComponent as searchIcon } from '../../icons/search.svg';

class ButtonForm extends Component {

    render() {
        return  (
            <div className={styles.frame}>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <Button theme='default' size='big' srcImage={searchIcon}  text='Text here' />
                        <Button theme='default' size='big' text='Text here' />
                        <Button theme='default' size='big' srcImage={searchIcon} />
                    </div>
                    <div className={styles.buttonBlock}>
                        <Button theme='default' size='small' srcImage={searchIcon} text='Text here'/>
                        <Button theme='default' size='small' text='Text here' />
                        <Button theme='default' size='small' srcImage={searchIcon} />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <Button theme='flat' size='big' srcImage={searchIcon} text='Text here' />
                        <Button theme='flat' size='big' text='Text here'/>
                        <Button theme='flat' size='big' srcImage={searchIcon}/>
                    </div>
                    <div className={styles.block}>
                        <Button theme='flat' size='small' ssrcImage={searchIcon} text='Text here' />
                        <Button theme='flat' size='small' text='Text here' />
                        <Button theme='flat' size='small' srcImage={searchIcon} />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <Button theme='disabled' size='big' srcImage={searchIcon} text='Text here' />
                        <Button theme='disabled' size='big' text='Text here' />
                        <Button theme='disabled' size='big' srcImage={searchIcon} />
                    </div>
                </div>
            </div>

    )}
}
export default ButtonForm;