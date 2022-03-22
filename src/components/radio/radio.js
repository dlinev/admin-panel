import styles from './radio.module.css'; 
import { Text } from '../components';
import cx from 'classnames';

export const Radio = ({ 
    id, 
    name,
    value, 
    checked=false, 
    text='', 
    className,
    classNameInput,
    onChange=()=>{} 
}) => {    
  const classNames = cx(styles._, {
    [className]: !!className
  });
  const classNamesInput = cx(styles.item, {
    [classNameInput]: !!classNameInput
  });
return (
    <div className={classNames}>
      <label className={styles.label}>
        <input
          className={classNamesInput}
          type='radio'
          id={id}
          name={name}
          value={value}
          defaultChecked={checked}
          onChange={onChange}
        />
        {text==='' ? '' : <Text className={styles.text} text={text}/>}
      </label>
    </div>

  )
}
export default Radio;