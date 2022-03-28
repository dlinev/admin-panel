import cx from 'classnames';

import styles from './Label.module.css'; 

export const Label = ({   
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
