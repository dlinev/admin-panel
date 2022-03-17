import styles from './text.module.css'; 

export const Text = ( { text=''} ) => {
        return (
            <div className={styles._}>{text}</div>
        )
    }
export default Text;