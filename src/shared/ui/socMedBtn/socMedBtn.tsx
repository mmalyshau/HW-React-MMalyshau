import style from "./socMedBtn.module.scss";

interface SocialLink {
  icon: string;
  alt: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: "inst", alt: "Instagram", href: "https://www.instagram.com" },
  { icon: "x", alt: "Twitter", href: "https://x.com/" },
  { icon: "youtube", alt: "YouTube", href: "https://www.youtube.com" }
];

export const SocialMedia = () => {
  return (
    <div className={style.social__media}>
      {socialLinks.map((social, index) => (
        <div key={index} className={style.border}>
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            <img className={`${style.icon} ${style[social.icon]}`} />
          </a>
        </div>
      ))}
    </div>
  );
};