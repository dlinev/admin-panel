import styles from './input.module.css'; 
import cx from 'classnames';

export const Input = ( {    type = "datetime",
                            placeholder = 'Введите', 
                            value,
                            disabled=false,
                            className,
                            onChange=()=>{}
                        } ) => {

    const classNames = cx(styles._, {
        [className]: !!className,
    });

    return (
        <input className={classNames}
                type={type}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={onChange}/>
    )
}
export default Input;