import classNames from 'classnames';
import './App.scss';
import IconLink from '@/components/IconLink';

const App = (props) => {
  const {
    className,
    links = [],
    variant = 'default',
  } = props;

  const sizeConfig = {
    default: {
      'app-store': { width: 36, height: 36 },
      'google-play': { width: 36, height: 36 },
    },
  };

  const currentSizes = sizeConfig[variant] || sizeConfig.default;

  return (
    <div className={classNames(className, 'app', `app--${variant}`)}>
      <ul className="app__list">
        {links.map(({ label, iconName }, index) => (
          <li className="app__item" key={index}>
            <IconLink
              className="app__link"
              mode="app"
              title={label}
              iconName={iconName}
              width={currentSizes[iconName]?.width}
              height={currentSizes[iconName]?.height}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;