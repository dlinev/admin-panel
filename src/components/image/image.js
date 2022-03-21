import styles from './image.module.css'; 
import cx from 'classnames';

import { ReactComponent as AbortIcon }   from '../../icons/abort.svg';
import { ReactComponent as SearchIcon }  from '../../icons/search.svg';
import { ReactComponent as XLargeIcon }  from '../../icons/x-large.svg';
import { ReactComponent as XMediumIcon } from '../../icons/x-medium.svg';
import { ReactComponent as LockedIcon }  from '../../icons/locked.svg';
import { ReactComponent as MoonIcon }    from '../../icons/moon.svg';
import { ReactComponent as SunIcon }     from '../../icons/sun.svg';
import { ReactComponent as VArrowIcon }  from '../../icons/v_arrow.svg';

export const Image = ( { icon, className} ) => {
    let iconObj = '';

    const classNames = cx(styles._, {
        [className]: !!className,
      });

    const arrIcons = [
        {iconName: 'AbortIcon',     iconClass: <AbortIcon   className={classNames} />},
        {iconName: 'SearchIcon',    iconClass: <SearchIcon  className={classNames} />},
        {iconName: 'XLargeIcon',    iconClass: <XLargeIcon  className={classNames} />},
        {iconName: 'XMediumIcon',   iconClass: <XMediumIcon className={classNames} />},
        {iconName: 'LockedIcon',    iconClass: <LockedIcon  className={classNames} />},
        {iconName: 'MoonIcon',      iconClass: <MoonIcon    className={classNames} />},
        {iconName: 'SunIcon',       iconClass: <SunIcon     className={classNames} />},
        {iconName: 'VArrowIcon',    iconClass: <VArrowIcon  className={classNames} />},
    ];
    try {
        iconObj = arrIcons.find(item => item.iconName === (icon)).iconClass;
    } catch(error) { /* do nofing */};

    return (iconObj)
}
export default Image;