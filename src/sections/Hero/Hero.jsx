import HeroMajor from '@/components/HeroMajor';
import './Hero.scss';
import heroItems from './heroItems';
import heroCardItems from './heroCardItems';
import HeroCard from '@/components/HeroCard';
import Slider from '@/components/Slider';
import Platforms from '@/components/Platforms';
import SubscriptionCard from '@/components/SubscriptionCard';
import classNames from 'classnames';

const Hero = (props) => {
  const {
    mode = '',
    label = '', // 'home', 'about' и т.д.
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

  const getSliderHomeHero = () => {
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

  const getPlatformsHomeHero = () => {
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

  const getCardsAboutHero = () => {
    const aboutCardsData = [
      {
        value: <>76<span>K</span></>,
        text: "Community Members",
      },
      {
        value: <>128<span>K</span></>,
        text: "Podcast Subscribers",
      },
      {
        value: <>59<span>K</span></>,
        text: "Daily Listeners",
      },
    ] 
    return (
      <div className="hero__subscriptions-cards container">
        <SubscriptionCard cardData={aboutCardsData} />
      </div>
    )
  }

  const getBodySection = (label) => {
    switch (label) {
      case "home":
        return (
          <>
            {getSliderHomeHero()}
            {getPlatformsHomeHero()}
          </>
        );
      case "about":
        return (
          <>
            {getCardsAboutHero()}
          </>
        );
      default:
        break;
    }
  };

  return (
    <section className={classNames("hero", {
      [`hero--${mode}`]: mode
    })} aria-labelledby={titleId}>
      <HeroMajor 
        className="hero__major"
        mode={label}
        titleId={titleId}
        {...currentHero}
        label={label}
      />
      {getBodySection(label)}
    </section>
  );
};

export default Hero;