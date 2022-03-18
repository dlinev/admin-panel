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
    icon='',
    iconButton='',
    className,
    onChange=()=>{}
} ) => {

    const classNames = cx(styles._, {
        [className]: !!className,
    });

    const classNamesInput = cx(styles.item, {
        [styles.item_error]: isError,
        [styles.item_lock]: disabled,
    });

    return (
        <div className={classNames}>
            <label className={styles.label}>{label}
                <div className={styles.inputBlock}>
                    <Input  className={classNamesInput}
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            disabled={disabled}
                            onChange={onChange}/>
                    {icon==='' ? '' : <Image className={styles.image} icon={icon} /> }
                    {iconButton==='' ? '' : <Button className={styles.button} icon={iconButton}/>}
                </div>
            </label>
        </div>
    )
}
export default InputBlock;