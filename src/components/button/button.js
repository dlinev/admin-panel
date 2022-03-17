import cx from 'classnames';
import styles from './button.module.css'; 

import { Image, Text } from '../components'

export const Button = ( { theme, size, text, iconName} ) => {

    const classNames = cx({
      [styles._]: true,
      [styles.item]: true,
      [styles.theme_default]: (theme==='default'),
      [styles.theme_flat]: (theme==='flat'),
      [styles.theme_disabled]: (theme==='disabled'),
      [styles.size_big]: (size==='big'),
      [styles.size_small]: (size==='small'),
      [styles.size_icon_only]:(iconName!=='' || text==='')
    });    
    return (
      <button className={classNames}>
        {iconName==='' ? '' : <Image iconName={iconName} />}
        {text==='' ? '' : <Text text={text} />}
      </button>

    )
}
export default Button;
