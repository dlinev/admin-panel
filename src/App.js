import './styles/reset.css';
import './styles/index.css';
import './styles/input.css';
import './styles/search-bar.css';
import './styles/checkbox-radio.css';
import './styles/button.css';

function App() {
  return (
    <div class="wrapper">

<div class="frame">
      <div class="input">
        <label class="input__label"
          >Дата и время заказа
          <div class="input-block">
            <input
              class="input-block__item"
              type="datetime"
              placeholder="Введите"
            />
          </div>
        </label>
      </div>

      <div class="input">
        <label class="input__label"
          >Дата и время заказа
          <div class="input-block">
            <input
              class="input-block__item input-block__item_error"
              type="datetime"
              placeholder="Введите"
              value="06.12.2021"
            />
            <button class="input-button">
              <svg
                class="input-button__img"
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

      <div class="input">
        <label class="input__label"
          >Дата и время заказа
          <div class="input-block">
            <input
              class="input-block__item input-block__item_lock"
              type="datetime"
              disabled="true"
              placeholder="Введите"
              value="06.12.2021"
            />
            <svg
              class="input-block__img"
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

    <div class="frame frame_search-bar">
      
      <div class="search-bar">
        <input
          class="input-block search-bar__input"
          type="text"
          placeholder="Номер заказа или ФИО"
          >
            <svg
              class="search-bar__img"
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
          </input>
        </div>
      

      <div class="search-bar">
        <input
          class="input-block search-bar__input search-bar__input_cancel"
          type="text"
          placeholder="Номер заказа или ФИО"
          value="50744"
        >
            <svg
              class="search-bar__img"
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
            <button class="input-button">
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
          </input>
      </div>    
    </div>

      <div class="frame frame_checkbox-radio">
        <div class="checkbox-block">
          <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="checkbox-1" />
            <label for="checkbox-1"></label>
          </div>
          <div class="checkbox">
            <input
              class="custom-checkbox"
              type="checkbox"
              id="checkbox-2"
              checked
            />
            <label for="checkbox-2"></label>
          </div>
        </div>
      </div>

      <div class="frame frame_checkbox-radio">
        <div class="radio-block">
          <div class="radio">
            <input
              class="custom-radio"
              id="radio-1"
              type="radio"
              name="radio-group"
              value="radio1"
            />
            <label for="radio-1"></label>
          </div>
          <div class="radio">
            <input
              class="custom-radio"
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

      <div class="frame frame__button">
      <div class="button-column">
        <div class="button-block">
          <button
            class="button button__item button_theme_default button_size_big"
          >
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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
            <div class="button__text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_default button_size_big"
          >
            <div class="button__text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_default button_size_big button_size_icon_only"
          >
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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

        <div class="button-block">
          <button
            class="button button__item button_theme_default button_size_small"
          >
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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
            <div class="button__text button_small_text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_default button_size_small"
          >
            <div class="button__text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_default button_size_small button_size_icon_only"
          >
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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

      <div class="button-column">
        <div class="button-block">
          <button class="button button__item button_theme_flat button_size_big">
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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
            <div class="button__text button_big_text">Text here</div>
          </button>

          <button class="button button__item button_theme_flat button_size_big">
            <div class="button__text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_flat button_size_icon_only"
          >
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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

        <div class="button-block">
          <button
            class="button button__item button_theme_flat button_size_small"
          >
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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
            <div class="button__text button_small_text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_flat button_size_small"
          >
            <div class="button__text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_flat button_size_icon_only"
          >
            <svg class="button__img" viewBox="0 0 16 16" stroke="none">
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

      <div class="button-column">
        <div class="button-block">
          <button
            class="button button__item button_theme_disabled button_size_big"
          >
            <svg
              class="button__img"
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
            <div class="button__text button_big_text">Text here</div>
          </button>

          <button
            class="button button__item button_theme_disabled button_size_big"
          >
            <div class="button__text">Text here</div>
          </button>
        </div>
      </div>
    </div>


    </div>

    
    );
}

export default App;
