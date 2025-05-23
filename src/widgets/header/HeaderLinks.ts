export type HeaderLink = {
  name: string;
  link: string;
};

 const HeaderLinks: HeaderLink[] = [
  { name: 'Home', link: '/' },
  { name: 'Menu', link: '/menu' },
  { name: 'Company', link: '/company' },
  { name: 'Login', link: '/login' },
];

export default HeaderLinks;