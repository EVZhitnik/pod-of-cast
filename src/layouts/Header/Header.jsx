import Logo from '@/components/Logo';
import './Header.scss';
import classNames from 'classnames';
import Button from '@/components/Button';
import BurgerButton from '@/components/BurgerButton';

const Header = (props) => {
  const {
    url,
  } = props;

  const menuItems = [
    {
      label: 'Episodes',
      href: './',
    },
    {
      label: 'About',
      href: './about',
    },
    {
      label: 'More',
      href: './blog',
      submenu: <Button className="header__button-submenu" mode='submenu' label="Submenu" isLabelHidden iconName="header-arrow-down"/>
    },
  ];

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo"/>
        <dialog className="header__overlay-menu-dialog" data-js-overlay-menu-dialog="">
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({label, href, submenu}, index) => (
                <li className={classNames("header__menu-item", {'has-submenu': submenu})} key={index}>
                  <a 
                    className={classNames("header__menu-link", {'is-active': href === '.' + url})} 
                    href={href}
                  >
                    {label}
                  </a>
                  {submenu && submenu}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__link-recent"
              href="#episodes"
              label="Recent Episodes"
              mode="recent"
            />
            <Button
              className="header__link-subscribe"
              href="/"
              label="Subscripe"
              mode="subscripe"
            />
          </div>
        </dialog>
        <BurgerButton 
          className="header__burger-button visible-mobile" 
          extraAttrs ={{
            'data-js-overlay-menu-burger-button': ''
          }}/>
      </div>
    </header>
  )
};

export default Header;