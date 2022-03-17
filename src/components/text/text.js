import styles from './text.module.css'; 
import cx from 'classnames';

export const Text = ( { text, className} ) => {
    const classNames = cx(styles._, {
        [className]: !!className,
      });

    return (
            <div className={classNames}>{text}</div>
        )
    }
export default Text;