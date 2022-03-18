import cx from 'classnames';
import styles from './button.module.css'; 

import { Image, Text } from '../components'

export const Button = ( { 
  text, 
  icon, 
  className,
  classNameImage,
  classNameText,
} ) => {

    const classNames = cx(styles._,{
      [className]: !!className
    });   

    const classNamesImage = cx({
      [classNameImage]: !!classNameImage
    });   

    const classNamesText = cx({
      [classNameText]: !!classNameText
    });   

    return (
      <button className={classNames}>
        {icon==='' ? '' : <Image className={classNamesImage} icon={icon} />}
        {text==='' ? '' : <Text  className={classNamesText} text={text} />}
      </button>

    )
}
export default Button;
