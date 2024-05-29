import { links } from '../../utils/links';
import FooterLink from '../FooterLink/FooterLink';
import './NavFooter.scss';

const NavFooter = () => {
  return (
    <div className='nav-footer'>
      {links.map((link) => {
        return <FooterLink key={link.title} {...link} />;
      })}
    </div>
  );
};
export default NavFooter;
