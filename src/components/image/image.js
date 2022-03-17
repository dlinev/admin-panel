import styles from './image.module.css'; 
import cx from 'classnames';

export const Image = ( { srcImage=''} ) => {
        return (
            <img className={styles._} src={srcImage}/>
        )
    }
export default Image;