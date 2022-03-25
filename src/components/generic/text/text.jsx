import cx from 'classnames';

import styles from './text.module.css'; 

export default ( { text, className, ...props} ) => {
    return (
        <div className={cx(styles._, className)} {...props}>{text}</div>
    )
}