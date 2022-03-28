import cx from 'classnames';
import { Input, Button, Image } from '../components.js';

import styles from './Searchbar.module.css'; 

export const Searchbar = ({  
    placeholder='Введите значение', 
    className,
    ...props
  }) => {
  
const { value } =  {...props};

  const classNamesInput = cx(styles.input, {
    [styles.input_cancel]: !value,
  });

  const classNamesImage = cx({
    [styles.image_cancel]: !value,
  });

  
  return ( 
    <div className={cx(styles._, className)}>
      <Image className={styles.image} icon='SearchIcon'/>
      <Input className={classNamesInput}
          type='text' 
          placeholder={placeholder}
          {...props}
      />
      { value && 
        <Button 
          className={styles.button} 
          classNameImage={classNamesImage} 
          theme='error'
        /> 
      }
    </div>
  )
}