import styles from './input.module.css'; 
import cx from 'classnames';

import Image  from '../image/image';
import Button from '../button/button';

export const Input = ( {    placeholder='Введите', 
                            label='Дата и время заказа', 
                            value,
                            isError=false,
                            isLock=false,
                            srcImage='',
                            srcButtonImage=''
                        } ) => {

    const itemClassNames = cx({
        [styles.error]: isError,
        [styles.block]: isLock
    });

    // showButton(){
    //     return <button className={styles.button}>
    //                 <svg
    //                     className={styles.image__button}
    //                     viewBox="0 0 16 16"
    //                     fill="none"
    //                     stroke="#BAD8F5"
    //                 >
    //                     <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
    //                 </svg>
    //             </button>
    // }

    // showIcon(){
    //     return <svg className={styles.image}
    //                 viewBox="0 0 16 16"
    //                 fill="#000"
    //                 stroke="none"
    //                 >
    //                 <path
    //                     fill-rule="evenodd"
    //                     clip-rule="evenodd"
    //                     d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
    //                     stroke="none"
    //                 />
    //                 <path
    //                     d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
    //                     stroke="none"
    //                 />
    //             </svg>

    // }
    
        return (
            <div className="input">
                <label className={styles.label}>{label}
                    <div className={styles._}>
                        <input  className={`${styles.item}
                                            ${isError==='true' ? styles.item_error : ''}
                                            ${isLock==='true' ? styles.item_lock : ''}
                                `}
                                type="datetime"
                                placeholder={placeholder}
                                value={value}
                                disabled={isLock}/>
                        {srcImage==='' ? '' : <Image srcImage = {srcImage} />}
                        {srcButtonImage==='' ? '' : <Button />}
                    </div>
                </label>
            </div>
        )
    }
export default Input;