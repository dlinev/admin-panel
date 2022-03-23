import styles from './label.module.css'; 
import cx from 'classnames';

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
