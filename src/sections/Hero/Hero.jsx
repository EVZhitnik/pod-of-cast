import HeroMajor from '@/components/HeroMajor';
import './Hero.scss';
import heroItems from './heroItems';
import HeroCard from '@/components/HeroCard';
import Slider from '@/components/Slider';
import Platforms from '@/components/Platforms';
import AboutCard from '@/components/AboutCard';
import classNames from 'classnames';
import platformGroupsData from '@/constants/platformGroupsData';
import FieldSearch from '@/components/FieldSearch';

const Hero = (props) => {
  const {
    mode = '',
    label = '', // 'home', 'about' и т.д.
  } = props;

  const titleId = 'hero-title';
  const currentHero = heroItems[label];

  const getSliderHomeHero = () => {
    const heroCardTitleData = [
      "COVID-19 Endemic",
      "Self–confidence",
      "Perplexed Mind",
      "Social Class",
      "Women’s Rights",
      "Tesla Autopilot",
    ];

    return (
      <div className="hero__slider">
        <Slider 
          mode="hero" 
          labelSliderParams="hero" 
          hasNavigation={false}
        >
          {heroCardTitleData.map((title, index) => (
            <HeroCard className="hero__card" title={title} key={index}/>
          ))}
        </Slider>
      </div>
    );
  };

  const getPlatformsHomeHero = () => {
    return (
      <div className="hero__platforms container">
          <h4 className="hero__platforms-title">Supported by:</h4>
          <Platforms 
            className="hero__platforms-soc1als"
            variant="hero" 
            links={platformGroupsData[0].platforms}
          />
      </div>
    );
  };

  const getCardsAboutHero = () => {
    const aboutCardData = [
      {
        value: <>76<span className="about-card__value-accent">K</span></>,
        text: "Community Members",
      },
      {
        value: <>128<span className="about-card__value-accent">K</span></>,
        text: "Podcast Subscribers",
      },
      {
        value: <>59<span className="about-card__value-accent">K</span></>,
        text: "Daily Listeners",
      },
    ];

    return (
      <div className="hero__subscriptions-cards container">
        <AboutCard cardData={aboutCardData} />
      </div>
    );
  };
 
  const getSearchBlogHero = () => {
    return (
      <div className="hero__search">
        <FieldSearch />
      </div>
    );
  };

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
      case "blog":
        return (
          <>
            {getSearchBlogHero()}
          </>
        );
    };
  };

  return (
    <section className={classNames("hero", {
      [`hero--${mode}`]: mode
    })} aria-labelledby={titleId}>
      <HeroMajor 
        className="hero__major"
        titleId={titleId}
        {...currentHero}
        label={label}
      />
      {getBodySection(label)}
    </section>
  );
};

export default Hero;