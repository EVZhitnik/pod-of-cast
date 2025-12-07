import classNames from 'classnames';
import './HeroMajor.scss';
import Button from '@/components/Button';

const HeroMajor = (props) => {
  const {
    className,
    mode = '',
    titleId,
    title,
    description,
    label,
  } = props;

  const getButtonsSectionHero = (label) => {
    switch (label) {
      case "home":
        return (
          <Button 
            className="hero-major__link"
            href="./"
            label="Subscribe"
          />
        );
      case "about":
        return (
          <>
            <div className="hero-major__actions">
              <Button 
                className="hero-major__link"
                href="./"
                mode="hero-transparent"
                label="Become sponsor"
              />
              <Button 
                className="hero-major__link"
                href="./"
                label="Subscribe"
              /> 
            </div>           
          </>
        )  
      default:
        break;
    }
  };
  
  return (
    <div className={classNames(className, 'hero-major', {
      [`hero-major--${mode}`]: mode
    })}>
      <h1 className="hero-major__title" id={titleId}>{title}</h1>
      <div className="hero-major__description">
        <p>
          {description}
        </p>
      </div>
      {getButtonsSectionHero(label)}
    </div>
  );
};

export default HeroMajor;