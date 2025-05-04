import { Component } from "react";
import { HeaderLinks } from "./HeaderLinks";
import { CartBtn } from "@ui/cartBtn/cartBtn";

import Logo from '@images/icons/logo.svg';

import style from "./Header.module.scss";

export class Header extends Component {
  render() {
    const { cart } = this.props;

    return (
      <header className={style.header}>
        <div className={style.header__container}>
          <a href="/">
            <img src={Logo} className={style.header__logo} />
          </a>
          <nav className={style.nav}>
            <div className={style.nav__links}>
              {HeaderLinks.map((link, index) => (
                <a key={index} href={link.link} className={style.header__link}>
                  {link.name}
                </a>
              ))}
            </div>
            <CartBtn counter={cart} />
          </nav>
        </div>
      </header>
    );
  }
}
