import cx from 'classnames';

import { Label, Image, Button, Input } from '../components';
import styles from './inputWithLabel.module.css'; 

export default ( {   
    type = "datetime",
    placeholder = 'Введите', 
    label,
    theme,
    className,
    onChange=()=>{},
    ...props
} ) => {


    const classNames = cx(styles._, className, {
        [styles.theme_default]:  (theme==='default'),
        [styles.theme_error]:    (theme==='error'),
        [styles.theme_disabled]: (theme==='disabled'),
        [styles.no_icon]:        (theme!=='default'),
    });

    let icon;
    switch(theme){
        case 'default': 
            icon = '';
            break;
        case 'error':
            icon = 'XMediumIcon';
            break;
        case 'disabled':
            icon = 'LockedIcon';
            break;
    }

    return (
        <Label className={styles.label}>{label}
            <Input  className={classNames}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...props}
            />
            <Button className={styles.button} 
                    icon={icon} 
                    classNameImage={styles.image_error}
            />
        </Label>
    )
}