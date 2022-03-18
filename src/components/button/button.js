import cx from 'classnames';
import styles from './button.module.css'; 

import { Image, Text } from '../components'

export const Button = ( { text, icon, className} ) => {

    const classNames = cx(styles._,{
      [className]: !!className
    });   

    return (
      <button className={classNames}>
        {icon==='' ? '' : <Image icon={icon} />}
        {text==='' ? '' : <Text text={text} />}
      </button>

    )
}
export default Button;
