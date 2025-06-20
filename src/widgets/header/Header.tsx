import { HeaderLinks } from "@widgets";
import { CartBtn, logoutUser } from "@features";
import { useAppDispatch, useAppSelector } from "@hooks";

import  Logo  from '@images/icons/logo.svg';

import style from "./Header.module.scss";
import { useTheme } from "@context";
import { NavLink } from "react-router"

 const Header = () => {
   const dispatch = useAppDispatch();
   const user = useAppSelector((state) => state.auth.user);
   
     const { theme, toggleTheme } = useTheme() ?? {};

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <a href="/">
          <img src = {Logo} className={style.header__logo} alt={'logo'}/>
        </a>
        <nav className={style.nav}>
          <div className={style.nav__links}>
            {HeaderLinks.map((link, index) => {
              if (user && link.name === "Login") return null;
              return (
                  <NavLink key={index} to={link.link}  className={({ isActive }) =>
                    `${style.header__link} ${isActive ? style.active : ''}`
                     }>
                    {link.name}
                  </NavLink>
              );
            })}
            {user && (
                <button onClick={() => dispatch(logoutUser())} className={style.header__link}>
                  Logout
                </button>
            )}

            <button className={style.header__link} onClick={toggleTheme}> Switch {theme === 'light' ? 'dark' : 'light'} theme </button>
          </div>
          <CartBtn />
        </nav>
      </div>
    </header>
  );
};

export default Header;