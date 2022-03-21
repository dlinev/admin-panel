import { Checkbox } from '../components';
import styles from './checkboxBlock.module.css'; 


export const CheckboxBlock = ({ arrItems=[] }) => {    
  return ( arrItems.map(({id, text})=>(<Checkbox className={styles._} id={id} text={text} />)) )
}
export default CheckboxBlock;