import React, { Component } from 'react';
import styles from './button.module.css'; 


class ButtonBlock extends Component {
    render() {
        return  <div className="frame frame_button">
        <div className={styles.buttonColumn}>
          <div className={styles.buttonBlock}>
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_default} ${styles.button_size_big}`}
            >
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
              <div className={styles.button__text}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_default} ${styles.button_size_big}`}
            >
              <div className={styles.button__text}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_default} ${styles.button_size_big} ${styles.button_size_icon_only}`}
            >
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
    
          <div className={styles.buttonBlock}>
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_default} ${styles.button_size_small}`}
            >
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
              <div className={`${styles.button__text} ${styles.button_small_text}`}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_default} ${styles.button_size_small}`}
            >
              <div className={styles.button__text}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_default} ${styles.button_size_small} ${styles.button_size_icon_only}`}
            >
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
    
        <div className={styles.buttonColumn}>
          <div className={styles.buttonBlock}>
            <button className={`${styles.button} ${styles.button__item} ${styles.button_theme_flat} ${styles.button_size_big}`}>
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
              <div className={`${styles.button__text} ${styles.button_big_text}`}>Text here</div>
            </button>
    
            <button className={`${styles.button} ${styles.button__item} ${styles.button_theme_flat} ${styles.button_size_big}`}>
              <div className={styles.button__text}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_flat} ${styles.button_size_icon_only}`}
            >
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
    
          <div className={styles.buttonBlock}>
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_flat} ${styles.button_size_small}`}
            >
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
              <div className={`${styles.button__text} ${styles.button_small_text}`}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_flat} ${styles.button_size_small}`}
            >
              <div className={styles.button__text}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_flat} ${styles.button_size_icon_only}`}
            >
              <svg className={styles.button__img} viewBox="0 0 16 16" stroke="none">
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
    
        <div className={styles.buttonColumn}>
          <div className={styles.buttonBlock}>
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_disabled} ${styles.button_size_big}`}
            >
              <svg
                className={styles.button__img}
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
              <div className={`${styles.button__text} ${styles.button_big_text}`}>Text here</div>
            </button>
    
            <button
              className={`${styles.button} ${styles.button__item} ${styles.button_theme_disabled} ${styles.button_size_big}`}
            >
              <div className={styles.button__text}>Text here</div>
            </button>
          </div>
        </div>
      </div>
    
  
  }
}
export default ButtonBlock;
