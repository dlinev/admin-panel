import styles from './DropdownForm.module.css'; 
import { CheckboxBlock, RadioBlock, InputBlock, ButtonBlock, Text, Dropdown } from '../components'
import cx from 'classnames';

export const DropdownForm = () => {
  
  const classNamesCheckbox = cx(styles.item, styles.checkbox__item);
  const classNamesRadio    = cx(styles.item, styles.radio__item);

    return (
      <div className={styles.frame}>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <CheckboxBlock 
              className={classNamesCheckbox}
              arrItems={[
                  {id: 'dp_chk_item_1', text:'Новый'},
                  {id: 'dp_chk_item_2', text:'Рассчет'},
                  {id: 'dp_chk_item_3', text:'Подтвержден', checked: true} ,
                  {id: 'dp_chk_item_4', text:'Отложен'},
                  {id: 'dp_chk_item_5', text:'Выполнен'},
                  {id: 'dp_chk_item_6', text:'Отменен'},
              ]}
            />
          </div>
          <div className={styles.block}>
            <RadioBlock 
              name='radioGroup2'
              className={classNamesRadio}
              classNameInput={styles.hidden}
              arrItems={[
                {id: 'dp_rad_item_1', value:'dp_radio_group', text:'Новый'},
                {id: 'dp_rad_item_2', value:'dp_radio_group', text:'Рассчет'},
                {id: 'dp_rad_item_3', value:'dp_radio_group', text:'Подтвержден', checked: true} ,
                {id: 'dp_rad_item_4', value:'dp_radio_group', text:'Отложен'},
                {id: 'dp_rad_item_5', value:'dp_radio_group', text:'Выполнен'},
                {id: 'dp_rad_item_6', value:'dp_radio_group', text:'Отменен'},
              ]}
            />
          </div>
        </div>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <Text 
              className={styles.text}
              text='Номер страницы'
            />
            <InputBlock
              label=''
              placeholder='Введите номер'
            />
          </div>
          <div className={styles.block}>
            <Text 
              className={styles.text}
              text='Удалить n-записей'
            />
            <ButtonBlock 
              className={styles.button}
              theme='flat' 
              size='small'
              arrItems={[{text:'Удалить'}]}
            />
            <ButtonBlock 
              className={styles.button}
              theme='default' 
              size='small'
              arrItems={[{text:'Отменить'}]}
            />
          </div>
          <div className={styles.block}>
            <Text 
              className={styles.text}
              text='Выберете тему'
            />
            <ButtonBlock 
              className={styles.button}
              theme='flat' 
              size='small'
              arrItems={[{text:'Светлая', icon:'SunIcon'},]}
            />
            <ButtonBlock 
              className={styles.button}
              theme='default' 
              size='small'
              arrItems={[{text:'Темная',  icon:'MoonIcon'}]}
            />
          </div>
        </div>
      </div>
    )
}
export default DropdownForm;