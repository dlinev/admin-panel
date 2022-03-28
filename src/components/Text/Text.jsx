import cx from 'classnames';

import styles from './Text.module.css'; 

export const Text =( { text, className, ...props} ) => {
    return (
        <div className={cx(styles._, className)} {...props}>{text}</div>
    )
}