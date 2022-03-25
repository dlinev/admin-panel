import cx from 'classnames';

import styles from './row.module.css'; 

export default ({   
    children,
    className,
    ...props
})  => {
    return (
        <div className={cx(styles._, className)} {...props}>
            {children}
        </div>
    )
}
