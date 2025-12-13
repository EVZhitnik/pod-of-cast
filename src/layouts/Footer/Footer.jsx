import Logo from '@/components/Logo';
import './Footer.scss';
import Socials from '@/components/Socials';
import Platforms from '@/components/Platforms';
import App from '@/components/App';
import socialGroupsData from '@/constants/socialGroupsData';
import platformGroupsData from '@/constants/platformGroupsData';

const Footer = () => {
  const menuData = [
    [
      {
        label: 'About',
        href: './about',
      },
      {
        label: 'Testimonials',
        href: './testimonials',
      },
      {
        label: 'Features',
        href: './features',
      },
    ],
    [
      {
        label: 'Episodes',
        href: './episodes',
      },
      {
        label: 'Pricing',
        href: './pricing',
      },
      {
        label: 'Blog',
        href: './blog',
      },
    ],
  ];

  const extraLinks = ['Terms', 'Privacy'];

  return (
    <footer className='footer'>
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__info">
            <div className="footer__info-item">
              <Logo className="footer__logo" />
              <span className="footer__info-year">
                <time datetime="2021">©2021.</time>
              </span>
            </div>
            <div className="footer__info-item">
              <div className="footer__info-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="footer__info-item">
              <Socials className="footer__soc1als" mode="soc1als-footer" links={socialGroupsData[0].footer}/>
            </div>
          </div>
          <nav className="footer__menu">
            {menuData.map((items, index) => (
              <div className="footer__menu-column" key={index}>
                {items.map(({ label, href }, linkIndex) => (
                  <a className="footer__menu-link" href={href} key={linkIndex}>{label}</a>
                ))}
              </div>
            ))}
          </nav>
          <div className="footer__actions">
            <div className="footer__actions-platforms">
              <div className="footer__actions-platforms-text">
                <p>
                  Listen to episodes on your fav platform:
                </p>
              </div>
              <Platforms className="footer__actions-platforms-links" mode="footer" links={platformGroupsData[0].platforms}/>              
            </div>
            <div className="footer__actions-app">
                <div className="footer__actions-app-text">
                  <p>
                    App available on:
                  </p>
                </div>
                <App className="footer__actions-app-links"/>
            </div>
          </div>
        </div>
        <div className="footer__extra">
          <p className="footer__copyright">
            @ <time datetime="2022">2022</time>. All Rights Reserved. <span>Pod of Cast</span> 
          </p>
          <div className="footer__extra-links">
            {extraLinks.map((link, index) => (
              <a className="footer__extra-link" href="/" key={index}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;