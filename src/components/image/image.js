import styles from './image.module.css'; 
import cx from 'classnames';

export const Image = ( { srcImage=''} ) => {
        return (
            <img class='_' src={srcImage}/>
        )
    }
export default Image;