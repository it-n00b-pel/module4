import { memo, useMemo } from 'react';

import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { RoutePath, SidebarItemsList } from 'src/shared/config/routeConfig/routeConfig.tsx';

import style from './NavBar.module.scss';
import logo from '../../../shared/assets/icons/logo.svg';

const NavBar = memo(() => {
    const { pathname } = useLocation();
    const isActive = pathname === '/';
    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <Link
            to={item.path}
            key={item.path}
            className={style.header__link}
        >
            {item.text}
        </Link>
    )), []);

    return (
        <header className={style.header}>
            <Link to={RoutePath.home} className={classNames({ [style.header__logo__isActive]: isActive })}>
                <img src={logo} alt="logo" className={style.header__img} />
            </Link>
            <nav className={style.header__links}>
                {itemsList}
            </nav>
        </header>
    );
});

export default NavBar;
