import styles from './image.module.css'; 
import cx from 'classnames';

import { ReactComponent as AbortIcon }   from '../../icons/abort.svg';
import { ReactComponent as SearchIcon }  from '../../icons/search.svg';
import { ReactComponent as XLargeIcon }  from '../../icons/x-large.svg';
import { ReactComponent as XMediumIcon } from '../../icons/x-medium.svg';
import { ReactComponent as LockedIcon }  from '../../icons/locked.svg';


const arrIcons = [
    {iconName: 'AbortIcon', iconClass: <AbortIcon className={classNames} />},
    {iconName: 'SearchIcon', iconClass: <SearchIcon className={classNames} />},
    {iconName: 'XLargeIcon', iconClass: <XLargeIcon className={classNames} />},
    {iconName: 'XMediumIcon', iconClass: <XMediumIcon Icon className={classNames} />},
    {iconName: 'LockedIcon', iconClass: <LockedIcon Icon className={classNames} />},
];

export const Image = ( { iconName, className} ) => {
    let icon = '';

    const classNames = cx(styles._, {
        [className]: !!className,
      });

    try {
        icon = arrIcons.find(item => item.iconName === (iconName)).iconClass;
    } catch(error) { /* do nofing */};

    return (icon)
}
export default Image;