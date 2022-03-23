import styles from './input.module.css'; 
import cx from 'classnames';

export default ({  
    type = 'text',
    placeholder = 'Введите значениие', 
    className,
    onChange=()=>{},
    ...props
}) => {
    return (
        <input className={ cx(styles._, className)}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
        />
    )
}

