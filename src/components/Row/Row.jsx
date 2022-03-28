import cx from 'classnames';

import styles from './Row.module.css'; 

export const Row = ({   
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
