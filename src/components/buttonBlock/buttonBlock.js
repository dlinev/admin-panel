import cx from 'classnames';
import styles from './buttonBlock.module.css'; 
import { Button } from '../components';

export const ButtonBlock = ({ 
    theme,                             
    size, 
    arrItems=[],
    className 
}) => {
    
    const classNames = cx(styles._, {
        [styles.theme_default]:  (theme==='default'),
        [styles.theme_flat]:     (theme==='flat'),
        [styles.theme_disabled]: (theme==='disabled'),
        [styles.size_big]:       (size==='big'),
        [styles.size_small]:     (size==='small'),
        [className]: !!className
    });

    const classNamesImage = cx({
        [styles.image_default]:  (theme==='default'),
        [styles.image_disabled]: (theme==='disabled'),
    });

    const classNamesText = cx({
        [styles.text_big]:   (size==='big'),
        [styles.text_small]: (size==='small'),
    });

    return  (
        arrItems.map(({text='', icon=''})=>(
            <Button
              className={`${classNames} ${(icon!=='' || text==='') ? styles.size_icon_only : ''}`} 
              classNameImage={classNamesImage}
              classNameText={classNamesText}
              text={text} 
              icon={icon}
            />
        )
    )         
)}

export default ButtonBlock;