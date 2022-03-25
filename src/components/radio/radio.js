import { Text, Label, Input } from '../components';
import cx from 'classnames';

import styles from './radio.module.css'; 

export default ({ 
    text, 
    className,
    classNameInput,
    onChange=()=>{},
    ...props
}) => {    
  const classNames = cx(styles._, {
    [className]: !!className
  });
  const classNamesInput = cx(styles.item, {
    [classNameInput]: !!classNameInput
  });

  const { checked } = {...props};

return (
    <div className={classNames}>
      <Label className={styles.label}>
        <Input
          className={classNamesInput}
          type='radio'
          defaultChecked={checked}
          onChange={onChange}
          {...props}
        />
        {text && <Text className={styles.text} text={text}/>}
      </Label>
    </div>

  )
}