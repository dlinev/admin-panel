import styles from './radio.module.css'; 


export const Radio = ({ id, value, checked, text }) => {    
  return (
    <div className={styles._}>
        <input  className={styles.custom} 
                type="radio"
                name="radio-group"
                id={id}
                value={value}
                checked={checked} />
        <label for={id}></label>
        {text==='' ? '' : <Text text={text}/>}
    </div>
  )
}
export default Radio;