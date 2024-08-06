import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const CookieWall = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!getCookie('gdpr_consent')) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('gdpr_consent', 'true', 365);
    setShowBanner(false);
  };

  const handleDecline = () => {
    deleteAllCookies();
    setCookie('gdpr_consent', 'false', 365);
    setShowBanner(false);
  };

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
  };

  const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
  };

  const deleteCookie = (name) => {
    setCookie(name, '', -1);
  };

  const deleteAllCookies = () => {
    document.cookie.split(';').forEach((c) => {
      deleteCookie(c.split('=')[0].trim());
    });
  };

  if (!showBanner) return null;

  return (
    <div style={bannerStyle}>
      <p>We use cookies to offer you a better browsing experience, personalize content and ads, and analyze site traffic. By clicking "Accept", you agree to our use of cookies. You can learn more about our cookie policy in our <Link to={'/privacy-policy'}>Privacy Policy</Link>.</p>
      <ul className={'actions special'}>
        <li>
          <button onClick={handleDecline} className={buttonClasses}>Decline</button>
        </li>
        <li>
          <button onClick={handleAccept} className={`${buttonClasses} primary`}>Accept</button>
        </li>
      </ul>
    </div>
  );
};

const bannerStyle = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  backgroundColor: '#3e4094',
  borderTop: 'solid 1px #e2eaec',
  textAlign: 'center',
  padding: '2rem',
  zIndex: '100001',
};

const buttonClasses = 'button large';

export default CookieWall;