import { Radio } from '../components';
import styles from './radioBlock.module.css'; 


export const RadioBlock = ({ arrItems=[] }) => {    
  return ( arrItems.map(({ id, value, checked, text })=>(<Radio className={styles._} 
                                                                id={id} 
                                                                value={value} 
                                                                checked={checked} 
                                                                text={text} />))
  )
}
export default RadioBlock;