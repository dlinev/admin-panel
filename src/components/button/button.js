import cx from 'classnames';
import styles from './button.module.css'; 

import Image from '../image/image';
import Text from  '../text/text';

export const Button = ( { theme, size, srcImage, text} ) => {

    const classNames = cx({
      [styles._]: true,
      [styles.item]: true,
      [styles.theme_default]: (theme==='default'),
      [styles.theme_flat]: (theme==='flat'),
      [styles.theme_disabled]: (theme==='disabled'),
      [styles.size_big]: (size==='big'),
      [styles.size_small]: (size==='small'),
      [styles.size_icon_only]:(srcImage!=='' || text==='')
    });    
    return (
      <button className={classNames}>
        {srcImage==='' ? '' : <Image srcImage={srcImage} />}
        {text==='' ? '' : <Text text={text} />}
      </button>

    )
}
export default Button;
