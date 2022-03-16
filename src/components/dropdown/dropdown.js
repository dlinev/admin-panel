import React, { Component } from 'react';
import styles from './dropdown.module.css'; 


class DropdownBlock extends Component {
    render() {
        return  <div className="frame frame_dropdown">
      
        <div className={styles.dropdownCheck}>
          <div className={styles.dropdownBlock}>
            <div className={styles.dropdown}>
              <label className={styles.dropdown__label}>
                <div className={styles.dropdown__item}>
                  <input className={styles.dropdown__input} type="checkbox"/>
                  <svg className={styles.dropdown__img} viewBox="0 0 16 16" fill="#FFF" stroke="none">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                  </svg>
                </div>
                <div className={styles.dropdown__text}>Новый</div>
              </label>
            </div>
      
            <div className={styles.dropdown}>
              <label className={styles.dropdown__label}>
                <div className={styles.dropdown__item}>
                  <input className={styles.dropdown__input} type="checkbox"/>
                  <svg className={styles.dropdown__img} viewBox="0 0 16 16" fill="#FFF" stroke="none">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                  </svg>
                </div>
                <div className={styles.dropdown__text}>Рассчет</div>
              </label>
            </div>
      
            <div className={styles.dropdown}>
              <label className={styles.dropdown__label}>
                <div className={styles.dropdown__item}>
                  <input className={styles.dropdown__input} type="checkbox"/>
                  <svg className={styles.dropdown__img} viewBox="0 0 16 16" fill="#FFF" stroke="none">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                  </svg>
                </div>
                <div className={styles.dropdown__text}>Подтвержден</div>
              </label>
            </div>
            <div className={styles.dropdown}>
              <label className={styles.dropdown__label}>
                <div className={styles.dropdown__item}>
                  <input className={styles.dropdown__input} type="checkbox"/>
                  <svg className={styles.dropdown__img} viewBox="0 0 16 16" fill="#FFF" stroke="none">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                  </svg>
                </div>
                <div className={styles.dropdown__text}>Отложен</div>
              </label>
            </div>
            <div className={styles.dropdown}>
              <label className={styles.dropdown__label}>
                <div className={styles.dropdown__item}>
                  <input className={styles.dropdown__input} type="checkbox"/>
                  <svg className={styles.dropdown__img} viewBox="0 0 16 16" fill="#FFF" stroke="none">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                  </svg>
                </div>
                <div className={styles.dropdown__text}>Выполнен</div>
              </label>
            </div>
            <div className={styles.dropdown}>
              <label className={styles.dropdown__label}>
                <div className={styles.dropdown__item}>
                  <input className={styles.dropdown__input} type="checkbox"/>
                  <svg className={styles.dropdown__img} viewBox="0 0 16 16" fill="#FFF" stroke="none">
                  <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                  </svg>
                </div>
                <div className={styles.dropdown__text}>Отменен</div>
              </label>
            </div>
          </div>
      
      
          <div className={styles.dropdownBlock}>
            <div className={styles.dropdownRadio}>
              <div className={styles.dropdownRadio__items}>
                <label className={styles.dropdownRadio__label}>
                  <input className={styles.dropdownRadio__item} type="radio" name="radio" value="1"/>
                  <div className={styles.dropdownRadio__text}>Новый</div>
                </label>
              </div>
              <div className={styles.dropdownRadio__items}>
                <label className={styles.dropdownRadio__label}>
                  <input className={styles.dropdownRadio__item} type="radio" name="radio" value="2"/>
                  <div className={styles.dropdownRadio__text}>Рассчет</div>
                </label>
              </div>
              <div className={styles.dropdownRadio__items}>
                <label className={styles.dropdownRadio__label}>
                  <input className={styles.dropdownRadio__item} type="radio" name="radio" value="6" checked/>
                  <div className={styles.dropdownRadio__text}>Подтвержден</div>
                </label>
              </div>
              <div className={styles.dropdownRadio__items}>
                <label className={styles.dropdownRadio__label}>
                  <input className={styles.dropdownRadio__item} type="radio" name="radio" value="3"/>
                  <div className={styles.dropdownRadio__text}>Отложен</div>
                </label>
              </div>
              <div className={styles.dropdownRadio__items}>
                <label className={styles.dropdownRadio__label}>
                  <input className={styles.dropdownRadio__item} type="radio" name="radio" value="5"/>
                  <div className={styles.dropdownRadio__text}>Выполнен</div>
                </label>
              </div>
              <div className={styles.dropdownRadio__items}>
                <label className={styles.dropdownRadio__label}>
                  <input className={styles.dropdownRadio__item} type="radio" name="radio" value="4"/>
                  <div className={styles.dropdownRadio__text}>Отменен</div>
                </label>
              </div>
            </div>
          </div>
        </div>
      
        <div className={styles.dropdownSingle}>
          <div className={`${styles.dropdownBlock} ${styles.dropdownShort}`}>
              <div className={styles.dropdownInput}>
                <div className={styles.dropdownInput__text}>Номер страницы</div>
                <input className={styles.dropdownInput__item} type="text" placeholder="Введите номер"/>
              </div>
          </div>
      
          <div className={styles.dropdownBlock}>
            <div className={styles.dropdownInput}>
              <div className={styles.dropdownInput__text}>Удалить n записей?</div>
                <div className={styles.button}>
                  <button className={`${styles.dropdownButton__item} ${styles.dropdownButton_emptySmall}`}>
                    <div className={styles.dropdownButton__text}>Удалить</div>
                  </button>
                  <button className={`${styles.dropdownButton__item} ${styles.dropdownButton_fullSmall}`}>
                    <div className={styles.dropdownButton__text}>Отменить</div>
                  </button>
                </div>
            </div>
          </div>
      
          <div className={styles.dropdownBlock}>
            <div className={styles.dropdownInput}>
              <div className={styles.dropdownInput__text}>Выберите тему</div>
                <div className={styles.button}>
                  <button className={`${styles.dropdownButton__item} ${styles.dropdownButton_emptySmall}`}>
                    <svg className={styles.dropdownButton__img} viewBox="0 0 16 16" fill="#459DF5" strok="none">
                    <circle cx="8" cy="8" r="4" stroke="none"/>
                    <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none"/>
                    <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none"/>
                    <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none"/>
                    <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none"/>
                    <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none"/>
                    <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none"/>
                    <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none"/>
                    <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none"/>
                    </svg>
                    <div className={styles.dropdownButton__text}>Светлая</div>
                  </button>
                  <button className={`${styles.dropdownButton__item} ${styles.dropdownButton_fullSmall}`}>
                    <svg className={styles.dropdownButton__img} viewBox="0 0 16 16" fill="#FFF" stroke="none">
                    <path d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="none"/>
                    </svg>
                    <div className={styles.dropdownButton__text}>Темная</div>
                  </button>
                </div>
            </div>
          </div>
        </div>
      
      
      </div>
  
  }
}
export default DropdownBlock;