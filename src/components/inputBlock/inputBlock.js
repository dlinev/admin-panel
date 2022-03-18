import styles from './inputBlock.module.css'; 
import cx from 'classnames';

import { Image, Button, Input } from '../components';

export const InputBlock = ( {   
    type = "datetime",
    placeholder = 'Введите', 
    label = 'Дата и время заказа', 
    value,
    isError=false,
    disabled=false,
    icon,
    iconButton,
    className,
    onChange=()=>{}
} ) => {

    const classNames = cx(styles._, styles.item, {
        [styles.item_error]: isError,
        [styles.item_lock]: disabled,
        [className]: !!className,
    });

    return (
        <div className={classNames}>
            <label className={styles.label}>{label}
                <Input  className={styles.input}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        disabled={disabled}
                        onChange={onChange}/>
                {icon==='' ? '' : <Image icon={icon} /> }
                {iconButton==='' ? '' : <Button icon={iconButton}/>}
            </label>
        </div>
    )
}
export default InputBlock;