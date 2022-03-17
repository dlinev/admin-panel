import React, { Component } from 'react';
import styles from './InputForm.module.css'; 
import cx from 'classnames';
import Input from '../input/input'

import { ReactComponent as abortIcon } from '../../icons/abort.svg';
import { ReactComponent as searchIcon } from '../../icons/search.svg';

class InputForm extends Component {

    render() {
        return  <div className="frame">
                    <Input />
                    <Input 
                        value='06.12.2021' 
                        isError={true}
                        srcButtonImage={abortIcon}
                    />
                    <Input 
                        value='06.12.2021' 
                        disabled={true}
                        srcImage={searchIcon}
                    />
                </div>
  
  }
}
export default InputForm;