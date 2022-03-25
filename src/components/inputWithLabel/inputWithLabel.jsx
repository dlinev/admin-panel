import cx from 'classnames';

import { Label, Button, Input, Row } from '../components';

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


    const classNames = cx(styles._, className, {
        [styles.theme_error]:    (theme==='error'),
        [styles.theme_disabled]: (theme==='disabled'),
    });

    return (
        <Label className={styles.label}>{label}
            <Row className={classNames}>
                <Input  className={styles.input}
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={(theme==='disabled')}
                        {...props}
                />
                <Button className={styles.button} 
                        theme={theme}
                        size={size}
                        onClick={onClick}
                />
            </Row>
        </Label>
    )
}