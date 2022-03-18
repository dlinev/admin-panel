import styles from './search-bar.module.css'; 
import cx from 'classnames';
import { Input, Button, Image, Text } from '../components.js';

export const SearchBar = ({  
    placeholder='Номер заказа или ФИО', 
    value, 
    icon='', 
    iconButton='', 
    text='', 
    className
  }) => {
  
  const classNames = cx(styles._, {
    [className]: !!className,
  });
  
  const classNamesInput = cx(styles.input, {
    [styles.input_cancel]: (iconButton!==''),
  });

  const classNamesImage = cx({
    [styles.image_cancel]: (iconButton!==''),
  });

  
  return ( 
    <div className={classNames}>
      {text==='' ? '' : <Text text={text} />}
      {icon==='' ? '' : <Image className={styles.image} icon={icon}/>}
      {iconButton==='' ? '' : <Button className={styles.button} classNameImage={classNamesImage} icon={iconButton} />}
      <Input className={classNamesInput}
          type='text' 
          placeholder={placeholder}
          value={value}
          label=''
      />
    </div>
  )
}
export default SearchBar;    