import styles from './checkbox.module.css'; 

export const Checkbox = ({ id, text }) => {    

  return ( 
    <div className={styles._}>
        <input  className={styles.custom} 
                type='checkbox'
                id={id} />
        <label for={id}></label>
        {text==='' ? '' : <Text text={text}/>}
    </div>
  )
}
export default Checkbox;
