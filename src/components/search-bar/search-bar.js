import styles from './search-bar.module.css'; 
import { Input, Button, Image, Text } from '../components.js';

export const SearchBar = ({  placeholder='Номер заказа или ФИО', value, iconName, iconButtonName, text='' }) => {
  
  return ( 
    <div className={styles._}>
      {text==='' ? '' : <Text text={text} />}
      <Input 
          type='text' 
          placeholder={placeholder}
          value={value}
      />
      {iconName==='' ? '' : <Image iconName={iconName}/>}
      {iconButtonName==='' ? '' : <Button iconName={iconButtonName} />}
    </div>
  )
}
export default SearchBar;    