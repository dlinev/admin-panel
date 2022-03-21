import { Checkbox } from '../components';
import styles from './checkboxBlock.module.css'; 
import cx from 'classnames';

export const CheckboxBlock = ({ className, arrItems=[] }) => {    
  const classNames = cx(styles._, {
    [className]: !!className
  });
  return ( arrItems.map(({id, text, checked})=>(
    <Checkbox 
      className={classNames} 
      id={id} 
      text={text} 
      checked={checked}
    />)) 
  )
}
export default CheckboxBlock;