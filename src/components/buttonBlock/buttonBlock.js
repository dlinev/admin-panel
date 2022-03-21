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
        [className]: !!className
    });
    const classNamesButton = cx(styles.item, {
        [styles.theme_default]: (theme==='default'),
        [styles.theme_flat]: (theme==='flat'),
        [styles.theme_disabled]: (theme==='disabled'),
        [styles.size_big]: (size==='big'),
        [styles.size_small]: (size==='small'),
        [styles.size_icon_only]:(icon!=='' || text===''),
    });

    const classNamesImage = cx({
        [styles.image_default]: (theme==='default'),
        [styles.image_disabled]: (theme==='disabled'),
    });

    const classNamesText = cx({
        [styles.text_big]: (size==='big'),
        [styles.text_small]: (size==='small'),
    });

    return  (
        <div className={classNames}>
            <Button className={classNamesButton} classNameImage={classNamesImage} classNameText={classNamesText} icon={icon}  text={text} />
            <Button className={classNamesButton} classNameText={classNamesText} text={text} />
            <Button className={classNamesButton} classNameImage={classNamesImage} icon={icon} />
        </div>
)}

export default ButtonBlock;