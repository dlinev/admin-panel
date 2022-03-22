import styles from './dropdown.module.css'; 
import cx from 'classnames';

export const Dropdown = ({ type, text, className }) => {
  const classNames = cx(styles._, {
    [className]: !!className
  });
  return ( 
    <div className={classNames}>
      <label className={styles.label}>
        <div className={styles.item}>
          <input className={styles.input} 
                  type={type}/>
          <svg  className={styles.image} 
                viewBox="0 0 16 16" 
                fill="#FFF"
                stroke="none">
          <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
          </svg>
        </div>
        <div className={styles.text}>{text}</div>
      </label>
    </div>
  )
}
export default Dropdown;