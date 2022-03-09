import './styles/reset.css';
import './styles/index.css';
import './styles/input.css';
import './styles/search-bar.css';
import './styles/checkbox-radio.css';
import './styles/button.css';
import './styles/dropdown.css';

function App() {
  return (
    <div className="wrapper">

    <div className="frame">
      <div className="input">
        <label className="input__label"
          >Дата и время заказа
          <div className="input-block">
            <input
              className="input-block__item"
              type="datetime"
              placeholder="Введите"
            />
          </div>
        </label>
      </div>

      <div className="input">
        <label className="input__label"
          >Дата и время заказа
          <div className="input-block">
            <input
              className="input-block__item input-block__item_error"
              type="datetime"
              placeholder="Введите"
              value="06.12.2021"
            />
            <button className="input-button">
              <svg
                className="input-button__img"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#BAD8F5"
              >
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
              </svg>
            </button>
          </div>
        </label>
      </div>

      <div className="input">
        <label className="input__label"
          >Дата и время заказа
          <div className="input-block">
            <input
              className="input-block__item input-block__item_lock"
              type="datetime"
              disabled="true"
              placeholder="Введите"
              value="06.12.2021"
            />
            <svg
              className="input-block__img"
              viewBox="0 0 16 16"
              fill="#000"
              stroke="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
          </div>
        </label>
      </div>
    </div>


        <div className="frame frame_search-bar">
      
          <div className="search-bar">
            <input
              className="input-block search-bar__input"
              type="text"
              placeholder="Номер заказа или ФИО"
              />
                <svg
                  className="search-bar__img"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#459DF5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                    fill="none"
                  />
                </svg>
              
            </div>
      

          <div className="search-bar">
            <input
              className="input-block search-bar__input search-bar__input_cancel"
              type="text"
              placeholder="Номер заказа или ФИО"
              value="50744"/>
            
                <svg
                  className="search-bar__img"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#459DF5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                    fill="none"
                  />
                </svg>
                <button className="input-button">
                  <svg
                    class="input-button__img"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#BAD8F5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                  </svg>
                </button>
              
          </div>
      </div>



      <div className="frame frame_checkbox-radio">
        <div className="checkbox-block">
          <div className="checkbox">
            <input className="custom-checkbox" type="checkbox" id="checkbox-1" />
            <label for="checkbox-1"></label>
          </div>
          <div className="checkbox">
            <input
              className="custom-checkbox"
              type="checkbox"
              id="checkbox-2"
            />
            <label for="checkbox-2"></label>
          </div>
        </div>
      </div>

      <div className="frame frame_checkbox-radio">
        <div className="radio-block">
          <div className="radio">
            <input
              className="custom-radio"
              id="radio-1"
              type="radio"
              name="radio-group"
              value="radio1"
            />
            <label for="radio-1"></label>
          </div>
          <div className="radio">
            <input
              className="custom-radio"
              id="radio-2"
              type="radio"
              name="radio-group"
              checked
              value="radio2"
            />
            <label for="radio-2"></label>
          </div>
        </div>
      </div>

      <div className="frame frame__button">
      <div className="button-column">
        <div className="button-block">
          <button
            className="button button__item button_theme_default button_size_big"
          >
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
            <div className="button__text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_default button_size_big"
          >
            <div className="button__text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_default button_size_big button_size_icon_only"
          >
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>

        <div className="button-block">
          <button
            className="button button__item button_theme_default button_size_small"
          >
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
            <div className="button__text button_small_text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_default button_size_small"
          >
            <div className="button__text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_default button_size_small button_size_icon_only"
          >
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="button-column">
        <div className="button-block">
          <button className="button button__item button_theme_flat button_size_big">
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
            <div className="button__text button_big_text">Text here</div>
          </button>

          <button className="button button__item button_theme_flat button_size_big">
            <div className="button__text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_flat button_size_icon_only"
          >
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>

        <div className="button-block">
          <button
            className="button button__item button_theme_flat button_size_small"
          >
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
            <div className="button__text button_small_text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_flat button_size_small"
          >
            <div className="button__text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_flat button_size_icon_only"
          >
            <svg className="button__img" viewBox="0 0 16 16" stroke="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="button-column">
        <div className="button-block">
          <button
            className="button button__item button_theme_disabled button_size_big"
          >
            <svg
              className="button__img"
              viewBox="0 0 16 16"
              fill="#000"
              stroke="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
            <div className="button__text button_big_text">Text here</div>
          </button>

          <button
            className="button button__item button_theme_disabled button_size_big"
          >
            <div className="button__text">Text here</div>
          </button>
        </div>
      </div>
    </div>

    <div className="frame dropdown-frame">
    
    <div className="dropdown-check">
      <div className="dropdown-block">
        <div className="dropdown">
          <label className="dropdown__label">
            <div className="dropdown__item">
              <input className="dropdown__input" type="checkbox"/>
              <svg className="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
              <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
              </svg>
            </div>
            <div className="dropdown__text">Новый</div>
          </label>
        </div>

        <div className="dropdown">
          <label className="dropdown__label">
            <div className="dropdown__item">
              <input className="dropdown__input" type="checkbox"/>
              <svg className="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
              <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
              </svg>
            </div>
            <div className="dropdown__text">Рассчет</div>
          </label>
        </div>

        <div className="dropdown">
          <label className="dropdown__label">
            <div className="dropdown__item">
              <input className="dropdown__input" type="checkbox"/>
              <svg className="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
              <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
              </svg>
            </div>
            <div className="dropdown__text">Подтвержден</div>
          </label>
        </div>
        <div className="dropdown">
          <label className="dropdown__label">
            <div className="dropdown__item">
              <input className="dropdown__input" type="checkbox"/>
              <svg className="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
              <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
              </svg>
            </div>
            <div className="dropdown__text">Отложен</div>
          </label>
        </div>
        <div className="dropdown">
          <label className="dropdown__label">
            <div className="dropdown__item">
              <input className="dropdown__input" type="checkbox"/>
              <svg className="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
              <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
              </svg>
            </div>
            <div className="dropdown__text">Выполнен</div>
          </label>
        </div>
        <div className="dropdown">
          <label className="dropdown__label">
            <div className="dropdown__item">
              <input className="dropdown__input" type="checkbox"/>
              <svg className="dropdown__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
              <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
              </svg>
            </div>
            <div className="dropdown__text">Отменен</div>
          </label>
        </div>
      </div>


      <div className="dropdown-block">
        <div className="dropdown-radio">
          <div className="dropdown-radio__items">
            <label className="dropdown-radio__label">
              <input className="dropdown-radio__item" type="radio" name="radio" value="1"/>
              <div className="dropdown-radio__text">Новый</div>
            </label>
          </div>
          <div className="dropdown-radio__items">
            <label className="dropdown-radio__label">
              <input className="dropdown-radio__item" type="radio" name="radio" value="2"/>
              <div className="dropdown-radio__text">Рассчет</div>
            </label>
          </div>
          <div className="dropdown-radio__items">
            <label className="dropdown-radio__label">
              <input className="dropdown-radio__item" type="radio" name="radio" value="6" checked/>
              <div className="dropdown-radio__text">Подтвержден</div>
            </label>
          </div>
          <div className="dropdown-radio__items">
            <label className="dropdown-radio__label">
              <input className="dropdown-radio__item" type="radio" name="radio" value="3"/>
              <div className="dropdown-radio__text">Отложен</div>
            </label>
          </div>
          <div className="dropdown-radio__items">
            <label className="dropdown-radio__label">
              <input className="dropdown-radio__item" type="radio" name="radio" value="5"/>
              <div className="dropdown-radio__text">Выполнен</div>
            </label>
          </div>
          <div className="dropdown-radio__items">
            <label className="dropdown-radio__label">
              <input className="dropdown-radio__item" type="radio" name="radio" value="4"/>
              <div className="dropdown-radio__text">Отменен</div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className="dropdown-single">
      <div className="dropdown-block dropdown-short">
          <div className="dropdown-input">
            <div className="dropdown-input__text">Номер страницы</div>
            <input className="dropdown-input__item" type="text" placeholder="Введите номер"/>
          </div>
      </div>

      <div className="dropdown-block">
        <div className="dropdown-input">
          <div className="dropdown-input__text">Удалить n записей?</div>
            <div className="button">
              <button className="dropdown-button__item dropdown-button_empty-small">
                <div className="dropdown-button__text">Удалить</div>
              </button>
              <button className="dropdown-button__item dropdown-button_full-small">
                <div className="dropdown-button__text">Отменить</div>
              </button>
            </div>
        </div>
      </div>

      <div className="dropdown-block">
        <div className="dropdown-input">
          <div className="dropdown-input__text">Выберите тему</div>
            <div className="button">
              <button className="dropdown-button__item dropdown-button_empty-small">
                <svg className="dropdown-button__img" viewBox="0 0 16 16" fill="#459DF5" strok="none">
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
                <div className="dropdown-button__text">Светлая</div>
              </button>
              <button className="dropdown-button__item dropdown-button_full-small">
                <svg className="dropdown-button__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                <path d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="none"/>
                </svg>
                <div className="dropdown-button__text">Темная</div>
              </button>
            </div>
        </div>
      </div>
    </div>
 

  </div>

    </div>

    
    );
}

export default App;
