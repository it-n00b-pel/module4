import { memo, useMemo, useState } from 'react';

import classNames from 'classnames';
import Hamburger from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import { RoutePath, SidebarItemsList } from 'src/shared/config/routeConfig/routeConfig.tsx';

import style from './NavBar.module.scss';
import logo from '../../../shared/assets/icons/logo.svg';

const NavBar = memo(() => {
    const [isShowNavBar, setActive] = useState(false);
    const { pathname } = useLocation();
    const isActive = pathname === '/module4/';
    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <Link
            to={item.path}
            key={item.path}
            className={style.header__link}
            onClick={() => { setActive(false); }}
        >
            {item.text}
        </Link>
    )), []);

    return (
        <header className={style.header}>
            <Link
                to={RoutePath.home}
                className={classNames(
                    { [style.header__logo__isActive]: isActive },
                    { [style.header__logo__transform]: !isActive },
                )}
            >
                <img src={logo} alt="logo" className={style.header__img} />
            </Link>
            <nav
                className={classNames({ [style.header__links_active]: isShowNavBar }, style.header__links)}
            >
                {isShowNavBar && (
                    <div className={style.header__hamburger__top}>
                        <Hamburger
                            direction="left"
                            toggled={isShowNavBar}
                            color="#0000008A"
                            onToggle={() => { setActive((prevState) => !prevState); }}
                        />
                    </div>
                )}
                {itemsList}
            </nav>

            <div className={style.header__hamburger}>
                <Hamburger
                    direction="left"
                    toggled={isShowNavBar}
                    color="#0000008A"
                    onToggle={() => { setActive(true); }}
                />
            </div>
        </header>
    );
});

export default NavBar;
