import styles from './checkboxBlock.module.css'; 


export const CheckboxBlock = () => {    
  return (
    <div className="checkboxBlock">
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
  )
}
export default CheckboxBlock;