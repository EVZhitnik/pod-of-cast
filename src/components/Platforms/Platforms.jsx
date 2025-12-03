import classNames from 'classnames';
import './Platforms.scss';
import IconLink from '@/components/IconLink';

const Platforms = (props) => {
  const {
    className,
    variant = 'footer', // footer, hero
    links = [],
  } = props;

  const sizeConfig = {
    footer: {
      'google-podcasts': { width: 122, height: 22 }, 
      'spotify': { width: 80, height: 22 },
      'youtube': { width: 94, height: 22 },
    },
    hero: {
      'spotify': { width: 128, height: 34 },
      'google-podcasts': { width: 198, height: 36 },
      'youtube': { width: 124, height: 28 },
    },
  };

  const currentSizes = sizeConfig[variant] || sizeConfig.default;

  return (
    <div className={classNames(className, 'platforms',)}>
      <ul className="platforms__list">
        {links.map(({ label, iconName }, index) => (
          <li className="platforms__item" key={index}>
            <IconLink
              className="platforms__link"
              mode="platforms"
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

export default Platforms;