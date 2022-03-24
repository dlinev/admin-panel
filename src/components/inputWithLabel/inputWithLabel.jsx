import cx from 'classnames';

import { Label, Button, Input } from '../components';

import styles from './inputWithLabel.module.css'; 

export default ( {   
    type = 'text',
    placeholder = 'Введите значениеи', 
    label,
    theme,
    size,
    className,
    onChange=()=>{},
    onClick=()=>{},
    ...props
} ) => {


    const inputClass = cx(styles._, className, {
        [styles.theme_error]:    (theme==='error'),
        [styles.theme_disabled]: (theme==='disabled'),
    });

    return (
        <Label className={styles.label}>{label}
            <Input  className={inputClass}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...props}
            />
            <Button className={styles.Button} 
                    theme={theme}
                    size={size}
                    onClick={onClick}
            />
        </Label>
    )
}