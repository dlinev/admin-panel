import { Radio } from '../components';
import styles from './radioBlock.module.css'; 
import cx from 'classnames';

export const RadioBlock = ({ className, arrItems=[] }) => {    
  const classNames = cx(styles._, {
    [className]: !!className
  });
  return ( arrItems.map(({ id, value, checked, text })=>(
    <Radio 
      className={classNames} 
      id={id} 
      value={value} 
      checked={checked} 
      text={text} />))
  )
}
export default RadioBlock;