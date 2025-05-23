import style from "./socMedBtn.module.scss";

import Inst from "@images/icons/inst.svg";
import X from "@images/icons/x.svg";
import YouTube from "@images/icons/youtube.svg";

interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { src: Inst, alt: "Instagram", href: "https://www.instagram.com" },
  { src: X, alt: "Twitter", href: "https://x.com/" },
  { src: YouTube, alt: "YouTube", href: "https://www.youtube.com" }
];

const SocialMedia = () => {
  return (
    <div className={style.social__media}>
      {socialLinks.map((social, index) => (
        <div key={index} className={style.border}>
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            <img src={social.src} alt={social.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;