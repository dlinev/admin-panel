import styles from './image.module.css'; 

import { ReactComponent as AbortIcon } from '../../icons/abort.svg';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ReactComponent as XLargeIcon } from '../../icons/x-large.svg';
import { ReactComponent as XMediumIcon } from '../../icons/x-medium.svg';
import { ReactComponent as LockedIcon } from '../../icons/locked.svg';

const arrIcons = [
    {iconName: 'AbortIcon', iconClass: <AbortIcon className={styles._} />},
    {iconName: 'SearchIcon', iconClass: <SearchIcon className={styles._} />},
    {iconName: 'XLargeIcon', iconClass: <XLargeIcon className={styles._} />},
    {iconName: 'XMediumIcon', iconClass: <XMediumIcon Icon className={styles._} />},
    {iconName: 'LockedIcon', iconClass: <LockedIcon Icon className={styles._} />},
];

export const Image = ( { iconName=''} ) => {
    let icon = '';
    try {
        icon = arrIcons.find(item => item.iconName === (iconName)).iconClass;
    } catch(error) { /* do nofing */};

    return (icon)
}
export default Image;