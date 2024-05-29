const FooterLink = ({ title, url, icon }) => {
  return (
    <div className='footer-link'>
      <a href={url}>{icon}</a>
    </div>
  );
};
export default FooterLink;
