import cx from 'classnames';
import styles from './button.module.css'; 

import { Image, Text } from '../components'

export default  ( { 
  text, 
  theme,
  size,
  className,
  onClick=()=>{},
  ...props
} ) => {

    const classNames = cx(styles._, className, {
      [styles.theme_default]:  (theme==='default'),
      [styles.theme_flat]:     (theme==='flat'),
      [styles.theme_disabled]: (theme==='disabled'),
      [styles.size_big]:       (size==='big'),
      [styles.size_small]:     (size==='small'),
      // [styles.size_icon_only]: (icon && text),
    });

    const imageClass = cx({
      [styles.image_default]:  (theme==='default'),
      [styles.image_disabled]: (theme==='disabled'),
    });   

    const textClass = cx({
      [styles.text_big]:   (size==='big'),
      [styles.text_small]: (size==='small'),
    });   

  let icon='';
  switch (theme){
    case 'disabled':
      icon = 'LockedIcon';
      break;
    default:
      icon = 'XMediumIcon';
      break;
  }

    return (
      <button className={classNames} onClick={onClick} {...props}>
        {icon && <Image className={imageClass} icon={icon} /> }
        {text && <Text  className={textClass}  text={text} /> }
      </button>

    )
}
