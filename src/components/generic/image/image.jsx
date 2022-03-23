import styles from './image.module.css'; 
import cx from 'classnames';

import { ReactComponent as AbortIcon }   from '../icons/abort.svg';
import { ReactComponent as SearchIcon }  from '../icons/search.svg';
import { ReactComponent as XLargeIcon }  from '../icons/x-large.svg';
import { ReactComponent as XMediumIcon } from '../icons/x-medium.svg';
import { ReactComponent as LockedIcon }  from '../icons/locked.svg';
import { ReactComponent as MoonIcon }    from '../icons/moon.svg';
import { ReactComponent as SunIcon }     from '../icons/sun.svg';
import { ReactComponent as VArrowIcon }  from '../icons/v_arrow.svg';

export default ( { icon, className, ...props} ) => {
    let iconObj = '';

    const classNames = cx(styles._, className );

    const icons = [
        {iconName: 'AbortIcon',     iconClass: <AbortIcon   className={classNames} {...props}/>},
        {iconName: 'SearchIcon',    iconClass: <SearchIcon  className={classNames} {...props} />},
        {iconName: 'XLargeIcon',    iconClass: <XLargeIcon  className={classNames} {...props} />},
        {iconName: 'XMediumIcon',   iconClass: <XMediumIcon className={classNames} {...props} />},
        {iconName: 'LockedIcon',    iconClass: <LockedIcon  className={classNames} {...props} />},
        {iconName: 'MoonIcon',      iconClass: <MoonIcon    className={classNames} {...props} />},
        {iconName: 'SunIcon',       iconClass: <SunIcon     className={classNames} {...props} />},
        {iconName: 'VArrowIcon',    iconClass: <VArrowIcon  className={classNames} {...props} />},
    ];
    try {
        iconObj = icons.find(item => item.iconName === (icon)).iconClass;
    } catch(error) { /* do nofing */};

    return (iconObj)
}