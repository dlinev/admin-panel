import styles from './image.module.css'; 

import { ReactComponent as AbortIcon } from '../../icons/abort.svg';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const arrIcons = [
    '',
    {iconName: 'AbortIcon', iconClass: <AbortIcon className={styles._} />},
    {iconName: 'SearchIcon', iconClass: <SearchIcon className={styles._} />},
];

export const Image = ( { srcImage=''} ) => {

    const icon = arrIcons.find(item => item.iconName == {srcImage}).iconClass;

    return (
        {icon}
    )
    }
export default Image;