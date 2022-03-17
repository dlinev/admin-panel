import styles from './input.module.css'; 
import cx from 'classnames';

import { Image, Button } from '../components';

export const Input = ( {    type = "datetime",
                            placeholder = 'Введите', 
                            label = 'Дата и время заказа', 
                            value = '',
                            isError=false,
                            disabled=false,
                            iconName='',
                            buttonIconName='',
                            onChange=()=>{}
                        } ) => {

    const inputClassNames = cx({
        [styles.item]: true,
        [styles.item_error]: isError,
        [styles.item_lock]: disabled
    });

    return (
        <div className="input">
            <label className={styles.label}>{label}
                <div className={styles._}>
                    <input  className={inputClassNames}
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            disabled={disabled}
                            onChange={onChange}/>
                    {iconName==='' ? '' : <Image iconName={iconName} /> }
                    {buttonIconName==='' ? '' : <Button iconName={buttonIconName}/>}
                </div>
            </label>
        </div>
    )
}
export default Input;