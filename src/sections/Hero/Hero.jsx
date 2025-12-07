import HeroMajor from '@/components/HeroMajor';
import './Hero.scss';
import heroItems from './heroItems';
import heroCardItems from './heroCardItems';
import HeroCard from '@/components/HeroCard';
import Slider from '@/components/Slider';
import Platforms from '@/components/Platforms';

const Hero = (props) => {
  const {
    label, // 'home', 'about' и т.д.
  } = props;

  const titleId = 'hero-title';
  const currentHero = heroItems[label];

  const itemsPlatforms = [
    {
      label: 'Spotify',
      iconName: 'spotify',
    },
    {
      label: 'Google Podcasts',
      iconName: 'google-podcasts',
    },
    {
      label: 'YouTube',
      iconName: 'youtube',
    },
  ];

  const getSliderHeroHome = () => {
    return (
      <div className="hero__slider">
        <Slider mode="hero" hasNavigation={false}>
          {heroCardItems.map((heroCardItem, index) => (
            <HeroCard className="hero__card" {...heroCardItem} key={index}/>
          ))}
        </Slider>
      </div>
    )
  };

  const getPlatformsHeroHome = () => {
    return (
      <div className="hero__platforms container">
          <h4 className="hero__platforms-title">Supported by:</h4>
          <Platforms 
            className="hero__platforms-soc1als"
            variant="hero" 
            links={itemsPlatforms}
          />
      </div>
    )
  };

  const getBodySection = (label) => {
    switch (label) {
      case "home":
        return (
          <>
            {getSliderHeroHome()}
            {getPlatformsHeroHome()}
          </>
        );
      default:
        break;
    }
  };

  return (
    <section className='hero' aria-labelledby={titleId}>
      <HeroMajor 
        className="hero__major"
        titleId={titleId}
        {...currentHero}
      />
      {getBodySection(label)}
    </section>
  );
};

export default Hero;