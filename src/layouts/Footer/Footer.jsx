import Logo from '@/components/Logo'
import './Footer.scss'
import Socials from '@/components/Socials'
import Platforms from '@/components/Platforms'
import AppLinks from '@/components/App'

const Footer = () => {
  const itemsMenu = [
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
  ]

  const itemsSocials = [
    {
      label: 'Twitter',
      iconName: 'twitter',
    },
    {
      label: 'Instagram',
      iconName: 'instagram',
    },
    {
      label: 'Tiktok',
      iconName: 'tiktok',
    },
  ]

  const itemsPlatforms = [
    {
      label: 'Google Podcasts',
      iconName: 'google-podcasts',
    },
    {
      label: 'Spotify',
      iconName: 'spotify',
    },
    {
      label: 'YouTube',
      iconName: 'youtube',
    },
  ]

  const itemsApp = [
    {
      label: 'App Store',
      iconName: 'app-store',
    },
    {
      label: 'Google Play',
      iconName: 'google-play',
    },
  ]

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
              <Socials className="footer__soc1als" links={itemsSocials}/>
            </div>
          </div>
          <nav className="footer__menu">
            {itemsMenu.map((column, columnIndex) => (
              <div className="footer__menu-column" key={columnIndex}>
                {column.map(({ label, href }, linkIndex) => (
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
              <Platforms className="footer__platforms-links" links={itemsPlatforms}/>              
            </div>
            <div className="footer__actions-app">
                <div className="footer__actions-app-text">
                  <p>
                    App available on:
                  </p>
                </div>
                <AppLinks className="footer__app-links" links={itemsApp} />
            </div>
          </div>
        </div>
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}

export default Footer;