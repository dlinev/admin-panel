import styles from './image.module.css'; 

export const Image = ( { srcImage=''} ) => {
        return (
            <img className={styles._} src={srcImage}/>
        )
    }
export default Image;