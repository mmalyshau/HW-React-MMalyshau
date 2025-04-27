import Logo from '@images/icons/logo.svg';
import { SocialMedia } from '@ui/socMedBtn/socMedBrn';

import style from './footer.module.scss';

export const Footer = () => {
 
    return (
      <footer className={style.footer}>
        <div className={style.footer__Top}>
          <div className={style.footer__Company}>
            <img src={Logo} alt='Logo' />
            <p>Takeaway & Delivery template for small - medium businesses.</p>
          </div>
          <div className={style.footer__Table}>
            <div className={style.footer__Column}>
              <h4 className={style.footer__Title}>Company</h4>
              <div className={style.footer__Content}>
                <a>Home</a>
                <a>Order</a>
                <a>FAQ</a>
                <a>Contact</a>
              </div>
            </div>
            <div className={style.footer__Column}>
              <h4 className={style.footer__Title}>Template</h4>
              <div className={style.footer__Content}>
                <a href='https://www.google.com/'>Style Guide</a>
                <a href='https://www.google.com/'>Changelog</a>
                <a href='https://www.google.com/'>License</a>
                <a href='https://www.google.com/'>Webflow University</a>
              </div>
            </div>
            <div className={style.footer__Column}>
              <h4 className={style.footer__Title}>Flowbase</h4>
              <div className={style.footer__Content}>
                <a>More Clonables</a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer__Bottom}>
          <hr />
          <div className={style.footer__Info}>
            <div className={style.footer__Build}>
              Built by <a href='' className={style.footer__Build__Link}>Flowbase</a> ∙ Powered by <a href='' className={style.footer__Build__Link}>Webflow</a>
            </div>
            <div className={style.footer__Socials}>
              <SocialMedia />
            </div>
          </div>
        </div>
      </footer>
    );
  }

