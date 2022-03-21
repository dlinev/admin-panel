import styles from './checkbox.module.css'; 
import { Text  } from '../components';
import cx from 'classnames';

export const Checkbox = ({ 
  id, 
  checked, 
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
                type='checkbox'
                id={id} 
                checked={checked}
                onChange={onChange} />
        <label for={id}></label>
        {text==='' ? '' : <Text text={text}/>}
    </div>
  )
}
export default Checkbox;
