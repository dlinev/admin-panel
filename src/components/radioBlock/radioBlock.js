import { Radio } from '../components';
import styles from './radioBlock.module.css'; 
import cx from 'classnames';

export const RadioBlock = ({ name, className, classNameInput, arrItems=[] }) => {    
  const classNames = cx(styles._, {
    [className]: !!className
  });
  const classNamesInput = cx({
    [classNameInput]: !!classNameInput
  });

  return ( arrItems.map(({ id, value, checked, text })=>(
    <Radio 
      className={classNames} 
      classNameInput={classNamesInput} 
      id={id} 
      name={name}
      value={value} 
      checked={checked} 
      text={text} 
    />))
  )
}
export default RadioBlock;