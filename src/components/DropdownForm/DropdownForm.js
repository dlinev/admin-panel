import { Checkbox, Radio, Input, InputWithLabel, Button, Text, Dropdown, Column, Row } from '../components'
import cx from 'classnames';

import styles from './dropdownForm.module.css'; 

export const DropdownForm = () => {
  
  const classNamesCheckbox = cx(styles.item, styles.checkbox__item);
  const classNamesRadio    = cx(styles.item, styles.radio__item);

    return (
      <div className={styles.frame}>
        <div className={styles.blocks}>
          
          <Column className={styles.block}>
            <Checkbox className={classNamesCheckbox} id='dp_chk_item_1' text='Новый' />
            <Checkbox className={classNamesCheckbox} id='dp_chk_item_2' text='Рассчет' />
            <Checkbox className={classNamesCheckbox} id='dp_chk_item_3' text='Подтвержден' checked={true} />
            <Checkbox className={classNamesCheckbox} id='dp_chk_item_4' text='Отложен' />
            <Checkbox className={classNamesCheckbox} id='dp_chk_item_5' text='Выполнен' />
            <Checkbox className={classNamesCheckbox} id='dp_chk_item_6' text='Отменен' />
          </Column>

          <Column className={styles.block}>
            <Radio 
              name='radioGroup2'
              className={classNamesRadio}
              classNameInput={styles.hidden}
              id='dp_rad_item_1'
              value='dp_radio_group'
              text='Новый'
            />
            <Radio 
              name='radioGroup2'
              className={classNamesRadio}
              classNameInput={styles.hidden}
              id='dp_rad_item_2'
              value='dp_radio_group'
              text='Рассчет'
            />
            <Radio 
              name='radioGroup2'
              className={classNamesRadio}
              classNameInput={styles.hidden}
              id='dp_rad_item_3'
              value='dp_radio_group'
              text='Подтвержден' 
              checked={true}
            />
            <Radio 
              name='radioGroup2'
              className={classNamesRadio}
              classNameInput={styles.hidden}
              id='dp_rad_item_4'
              value='dp_radio_group'
              text='Отложен'
            />
            <Radio 
              name='radioGroup2'
              className={classNamesRadio}
              classNameInput={styles.hidden}
              id='dp_rad_item_5'
              value='dp_radio_group'
              text='Выполнен'
            />
            <Radio 
              name='radioGroup2'
              className={classNamesRadio}
              classNameInput={styles.hidden}
              id='dp_rad_item_6'
              value='dp_radio_group'
              text='Отменен'
            />
          </Column>
        </div>

        <div className={styles.blocks}>
          
          <Column className={styles.block}>
            <InputWithLabel
              label='Номер страницы'
              placeholder='Введите номер'
              theme='default'
            />
          </Column>
          
          <Column className={styles.block}>
            <Text 
              className={styles.text}
              text='Удалить n-записей'
            />
            <Button
              className={styles.button}
              theme='flat' 
              size='small'
              icon='none'
              text='Удалить'
            />
            <Button
              className={styles.button}
              theme='default' 
              size='small'
              icon='none'
              text='Отменить'
            />
          </Column>

          <Column className={styles.block}>
            <Text 
              className={styles.text}
              text='Выберете тему'
            />
            <Button
              className={styles.button}
              theme='flat' 
              size='small'
              icon='SunIcon'
              text='Светлая'
            />
            <Button
              className={styles.button}
              theme='default' 
              size='small'
              icon='MoonIcon'
              text='Темная'
            />
          </Column>
        </div> 
      </div>
    )
}
export default DropdownForm;