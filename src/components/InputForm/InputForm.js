import React, { Component } from 'react';
import styles from './InputForm.module.css'; 
import cx from 'classnames';
import Input from '../input/input'

import { ReactComponent as abortIcon } from '../../icons/abort.svg';

class InputForm extends Component {

    render() {
        return  <div className="frame">
                    <Input 
                        placeholder='Введите' 
                        label='Дата и время заказа'
                    />
                    <Input 
                        placeholder='Введите' 
                        label='Дата и время заказа' 
                        value='06.12.2021' 
                        isError={true}
                        srcButtonImage=''
                    />
                    <Input 
                        placeholder='Введите' 
                        label='Дата и время заказа' 
                        value='06.12.2021' 
                        disabled={true}
                        srcImage={abortIcon}
                    />
                </div>
  
  }
}
export default InputForm;