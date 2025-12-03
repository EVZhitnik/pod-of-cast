import classNames from 'classnames';
import './HeroCard.scss';
import Socials from '@/components/Socials';

const HeroCard = (props) => {
  const {
    className,
    title,
    socials = [],
  } = props;

  return (
    <article className={classNames(className, 'hero-card')}>
      {socials.length > 0 && (
        <Socials 
          className='hero-card__soc1als' 
          mode="soc1als-base" 
          links={socials}
        />
      )}
      <h3 className="hero-card__title">
        <a className="hero-card__link" href="/">{title}</a>
      </h3>
    </article>
  );
};

export default HeroCard;