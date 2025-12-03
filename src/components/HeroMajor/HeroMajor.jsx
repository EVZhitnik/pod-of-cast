import classNames from 'classnames';
import './HeroMajor.scss';
import Button from '@/components/Button';

const HeroMajor = (props) => {
  const {
    className,
    titleId,
    title,
    description,
  } = props;

  return (
    <div className={classNames(className, 'hero-major')}>
      <h1 className="hero-major__title" id={titleId}>{title}</h1>
      <div className="hero-major__description">
        <p>
          {description}
        </p>
      </div>
      <Button 
        className="hero-major__button"
        href="/"
        mode="hero-major"
        label="Subscribe"
      />
    </div>
  );
};

export default HeroMajor;