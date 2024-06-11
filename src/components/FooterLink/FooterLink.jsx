const FooterLink = ({ title, url, icon }) => {
  return (
    <div className='footer-link' title={title}>
      <a href={url}>{icon}</a>
    </div>
  );
};
export default FooterLink;
