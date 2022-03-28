import { Searchbar } from '../components';

import styles from './SearchbarForm.module.css'; 

export const SearchbarForm = () => {
    return  <div className={styles.frame}>
                <Searchbar placeholder='Номер заказа или ФИО'/>
                <Searchbar placeholder='Номер заказа или ФИО' value='что-то ищем тут'/>
            </div>

}