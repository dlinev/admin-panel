import React, { Component } from 'react';
import styles from './ButtonForm.module.css'; 
import { ButtonBlock } from '../buttonBlock/buttonBlock'

class ButtonForm extends Component {

    render() {
        return  (
            <div className={styles.frame}>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <ButtonBlock 
                            className={styles.button_auto_size}
                            theme='default' 
                            size='big' 
                            arrItems={[
                                        {icon:'SearchIcon', text: 'Text here'},
                                        {text:'Text here'},
                                        {icon:'SearchIcon'}
                            ]}
                        />
                    </div>
                    <div className={styles.block}>
                        <ButtonBlock 
                            className={styles.button_auto_size}
                            theme='default' 
                            size='small' 
                            arrItems={[
                                {icon:'SearchIcon', text: 'Text here'},
                                {text:'Text here'},
                                {icon:'SearchIcon'}
                            ]}
                        /> 
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <ButtonBlock 
                            className={styles.button_auto_size}
                            theme='flat' 
                            size='big' 
                            arrItems={[
                                {icon:'SearchIcon', text: 'Text here'},
                                {text:'Text here'},
                                {icon:'SearchIcon'}
                            ]}
                        /> 
                    </div>
                    <div className={styles.block}>
                        <ButtonBlock 
                            className={styles.button_auto_size}
                            theme='flat' 
                            size='small' 
                            arrItems={[
                                {icon:'SearchIcon', text: 'Text here'},
                                {text:'Text here'},
                                {icon:'SearchIcon'}
                            ]}
                        /> 
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.block}>
                        <ButtonBlock 
                            className={styles.button_auto_size}
                            theme='disabled' 
                            size='big' 
                            arrItems={[
                                {icon:'SearchIcon', text: 'Text here'},
                                {text:'Text here'},
                                {icon:'SearchIcon'}
                            ]}
                        /> 
                    </div>
                </div>
            </div>

    )}
}
export default ButtonForm;