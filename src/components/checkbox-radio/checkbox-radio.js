import React, { Component } from 'react';
import styles from './checkbox-radio.module.css'; 


class CheckboxRadio extends Component {    
    render() {
        return <div className="checkboxBlock">
                    <div className="checkbox">
                        <input  className="customCheckbox" 
                                type={this.props.type}
                                id="element1" />
                        <label for="element1"></label>
                    </div>
                    <div className="checkbox">
                        <input  className="customCheckbox"
                                type={this.props.type}
                                id="element2"
                                />
                        <label for="element2"></label>
                    </div>
                </div>
  }
}
export default CheckboxRadio;

{/* <div className="frame frame_checkbox-radio">
<div className="radio-block">
  <div className="radio">
    <input
      className="custom-radio"
      id="radio-1"
      type="radio"
      name="radio-group"
      value="radio1"
    />
    <label for="radio-1"></label>
  </div>
  <div className="radio">
    <input
      className="custom-radio"
      id="radio-2"
      type="radio"
      name="radio-group"
      checked
      value="radio2"
    />
    <label for="radio-2"></label>
  </div>
</div>
</div> */}
