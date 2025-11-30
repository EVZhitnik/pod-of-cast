import classNames from 'classnames';
import './Platforms.scss';
import IconLink from '@/components/IconLink';

const Platforms = (props) => {
  const {
    className,
    links = [],
  } = props;

  return (
    <div className={classNames(className, 'platforms')}>
      <ul className="platforms__list">
        {links.map(({ label, iconName }, index) => (
          <li className="platforms__item" key={index}>
            <IconLink
              className="platforms__link"
              mode="platforms"
              title={label}
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;