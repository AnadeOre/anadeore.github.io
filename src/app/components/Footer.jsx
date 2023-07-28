import React from 'react';
import Hr from './Hr';
const Footer = () => {
  const today = new Date();
  return (
    <footer className='footer'>
      <Hr />
      <div class='footer-wrapper'>
        <div class='copyright-wrapper'>
          <span>Copyright &#169; {today.getFullYear()}</span>
          <span class='separator'>&nbsp;|&nbsp;</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
