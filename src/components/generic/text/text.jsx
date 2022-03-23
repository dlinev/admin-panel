import styles from './text.module.css'; 
import cx from 'classnames';

export default ( { text, className, ...props} ) => {
    return (
        <div className={cx(styles._, className)} {...props}>{text}</div>
    )
}