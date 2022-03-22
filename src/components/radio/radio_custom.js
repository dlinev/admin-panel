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
    onChange=()=>{} 
}) => {    
  const classNames = cx(styles._, {
    [className]: !!className
  });
return (
    <div className={classNames}>
        <input  className={styles.custom} 
                type="radio"
                name={name}
                id={id}
                value={value}
                defaultChecked={checked}
                onChange={onChange}/>
        <label for={id}></label>
        {text==='' ? '' : <Text text={text}/>}
    </div>
  )
}
export default Radio;