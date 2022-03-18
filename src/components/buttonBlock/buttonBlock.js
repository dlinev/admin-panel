import cx from 'classnames';
import styles from './buttonBlock.module.css'; 
import { Button } from '../components';

export const ButtonBlock = ({ 
    theme,                             
    size, 
    icon='SearchIcon',
    text='Text here',
    className 
}) => {
    
    const classNames = cx(styles._, {
        [styles.theme_default]: (theme==='default'),
        [styles.theme_flat]: (theme==='flat'),
        [styles.theme_disabled]: (theme==='disabled'),
        [styles.size_big]: (size==='big'),
        [styles.size_small]: (size==='small'),
        [styles.size_icon_only]:(icon!=='' || text===''),
        [className]: !!className
    });

    return  (
        <div className={classNames}>
            <Button className={classNames} icon={icon}  text={text} />
            <Button className={classNames} text={text} />
            <Button className={classNames} icon={text} />
        </div>
)}

export default ButtonBlock;