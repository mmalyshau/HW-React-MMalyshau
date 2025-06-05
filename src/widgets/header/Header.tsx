import { HeaderLinks } from "@widgets";
import { CartBtn, logoutUser } from "@features";
import { useAppDispatch } from "@hooks";
import {useAppSelector} from "@hooks";

import  Logo  from '@images/icons/logo.svg';

import style from "./Header.module.scss";

 const Header = () => {
   const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
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
                  <a key={index} href={link.link} className={style.header__link}>
                    {link.name}
                  </a>
              );
            })}
            {user && (
                <button onClick={() => dispatch(logoutUser())} className={style.header__link}>
                  Logout
                </button>
            )}
          </div>
          <CartBtn />
        </nav>
      </div>
    </header>
  );
};

export default Header;