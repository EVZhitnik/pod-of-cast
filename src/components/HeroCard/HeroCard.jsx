import classNames from 'classnames';
import './HeroCard.scss';
import Socials from '@/components/Socials';
import platformGroupsData from '@/constants/platformGroupsData';

const HeroCard = (props) => {
  const {
    className,
    title,
  } = props;

  return (
    <article className={classNames(className, 'hero-card')}>
      <Socials 
        className='hero-card__soc1als' 
        mode="soc1als-base" 
        links={platformGroupsData[0].base}
      />
      <h3 className="hero-card__title">{title}</h3>
    </article>
  );
};

export default HeroCard;