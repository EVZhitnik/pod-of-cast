import classNames from 'classnames';
import './Socials.scss';
import Button from '@/components/Button';

const Socials = (props) => {
  const {
    className,
    links = [],
  } = props;

  return (
    <div
      className={classNames(className, 'soc1als')}
    >
      <ul className="soc1als__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="socials__link"
              mode="soc1als"
              href="/"
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;