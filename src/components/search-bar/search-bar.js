import styles from './search-bar.module.css'; 
import cx from 'classnames';
import { Input, Button, Image, Text } from '../components.js';

export const SearchBar = ({  
    placeholder='Номер заказа или ФИО', 
    value, 
    icon, 
    iconButton, 
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
      {icon==='' ? '' : <Image className={styles.image} icon={icon}/>}
      {iconButton==='' ? '' : <Button icon={iconButton} />}
      <Input 
          type='text' 
          placeholder={placeholder}
          value={value}
          label=''
      />
    </div>
  )
}
export default SearchBar;    