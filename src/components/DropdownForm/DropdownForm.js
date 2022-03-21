import React, { Component } from 'react';
import styles from './DropdownForm.module.css'; 
import { CheckboxBlock, RadioBlock, InputBlock, Button, Text } from '../components'
import ButtonBlock from '../buttonBlock/buttonBlock';

class DropdownForm extends Component {

    render() {
        return (
          <div className={styles.frame}>
            <div className={styles.blocks}>
              <div className={styles.block}>
                <CheckboxBlock 
                  className={styles.checkbox__item}
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
                  className={styles._}
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
                <InputBlock label='Номер страницы' placeholder='Введите номер'/>
              </div>
              <div className={styles.block}>
                <Text text='Удалить n-записей'/>
                <ButtonBlock 
                  theme='default' 
                  size='small'
                  arrItems={[
                    {text:'Удалить'},
                    {text:'Отменить'}
                  ]}
                />
              </div>
              <div className={styles.block}>
                <Text text='Выберете тему'/>
                <ButtonBlock 
                  theme='default' 
                  size='small'
                  arrItems={[
                    {text:'Светлая', icon:'SunIcon'},
                    {text:'Темная',  icon:'MoonIcon'}
                  ]}
                />
              </div>
            </div>
            </div>
    )}
}
export default DropdownForm;