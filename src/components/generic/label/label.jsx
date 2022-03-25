import cx from 'classnames';

import styles from './label.module.css'; 

export default ({   
    children,
    text, 
    className,
    ...props
})  => {
    return (
        <label className={cx(styles._, className)} {...props}>{text}
            {children}
        </label>
    )
}