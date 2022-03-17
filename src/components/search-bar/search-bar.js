import styles from './search-bar.module.css'; 
import cx from 'classnames';
import { Input, Button, Image, Text } from '../components.js';

export const SearchBar = ({  
    placeholder='Номер заказа или ФИО', 
    value, 
    iconName, 
    iconButtonName, 
    text='', 
    className,
    ...props
  }) => {
  
  const classNames = cx(styles._, {
    [className]: !!className,
  });

  return ( 
    <div className={classNames}>
      {text==='' ? '' : <Text text={text} />}
      <Input className={styles.input}
          type='text' 
          placeholder={placeholder}
          value={value}
      />
      {iconName==='' ? '' : <Image className={styles.image} iconName={iconName}/>}
      {iconButtonName==='' ? '' : <Button iconName={iconButtonName} />}
    </div>
  )
}
export default SearchBar;    