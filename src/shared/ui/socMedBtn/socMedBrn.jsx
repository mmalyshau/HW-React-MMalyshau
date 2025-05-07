import style from "./socMedBtn.module.scss";

import Inst from "@images/icons/inst.svg";
import X from "@images/icons/x.svg";
import YouTube from "@images/icons/youtube.svg";

const socialLinks = [
  { src: Inst, alt: "Instagram", href: "https://www.instagram.com" },
  { src: X, alt: "Twitter", href: "https://x.com/" },
  { src: YouTube, alt: "YouTube", href: "https://www.youtube.com" }
];

export const SocialMedia = () => {
    return (
      <div className={style.social__media}>
        {socialLinks.map((social, index) => (
          <div key={index} className={style.border}>
            <a href={social.href} target="_blank">
              <img src={social.src} alt={social.alt} />
            </a>
          </div>
        ))}
      </div>
    );
}
