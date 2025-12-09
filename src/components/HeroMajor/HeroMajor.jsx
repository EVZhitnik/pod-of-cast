import classNames from 'classnames';
import './HeroMajor.scss';
import Button from '@/components/Button';
import HeroCard from '@/components/HeroCard';
import Badge from '@/components/Badge';
import { Image } from 'minista';
import Tags from '@/components/Tags';

const HeroMajor = (props) => {
  const {
    className,
    label = '',
    mode = label,
    titleId,
    title,
    description,
  } = props;

  const getButtonsSectionHero = (label) => {
    const baseButton = (
      <Button 
        className="hero-major__link"
        href="/subscribe"
        label="Subscribe"
      />
    );

    switch (label) {
      case "home":
        return baseButton;
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
              {baseButton}
            </div>           
          </>
        );
      case "podcast":
        return (
          <>
            <div className="hero-major__actions">
              {baseButton}
              <Button 
                className="hero-major__link"
                mode="hero-transparent"
                label={<>Listen now <span className="hero-major__link-accent">(46 min)</span></>}
                iconName="play-button"
              />
            </div>            
          </>
        )
      default:
        break;
    }
  };

  const getBodyHeroMajorPodcast = (label) => {
    const heroCardData = [
      {
        title: 'Perplexed Mind',
        socials: [
          {
            label: 'Google Podcast',
            iconName: 'google-podcast-mini',
          },
          {
            label: 'Spotify',
            iconName: 'spotify-mini',
          },
          {
            label: 'You Tube',
            iconName: 'youtube-mini',
          },
        ],
      },
    ];

    const arrayTags = ['mind-behaviour', 'health'];

    return (
      <div className="hero-major__info container">
        <div className="hero-major__info-header">
          {heroCardData.map((heroCardItems, index) => (
            <HeroCard className="hero-major__card" {...heroCardItems} key={index}/>
          ))}
          <div className="hero-major__content">
            <div className="hero-major__heading">
              <span className="hero-major__subtitle">Episode 1</span>
              <Badge className="hero-major__badge" mode="transparent">
                Featured episode
              </Badge>
            </div>
            <h1 className="hero-major__title h3">Are you a Perplexed Mind Person?</h1>
            <div className="hero-major__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <div className="hero-major__hosted">
              <div className="hero-major__hosted-info">
                <Image 
                  className='hero-major__hosted-avatar' 
                  src="./src/assets/images/person/5.jpg"
                  alt="Avatar Jane Doe" 
                />
                <div className="hero-major__hosted-text">
                  Hosted by: <span className="hero-major__hosted-text-accent">Jane Doe</span> 
                </div>
              </div>
              <div className="hero-major__hosted-date">
                <time datetime="2021-09-22">Sep 22, 2021</time>
              </div>
            </div>
            {getButtonsSectionHero(label)}
          </div>
        </div>
        <div className="hero-major__info-footer">
          <span className="hero-major__text-tags">Tags:</span>
          <Tags className="hero-major__tags" items={arrayTags} />
        </div>
      </div>
    );
  }

  const getBodyHeroMajor = (label) => {
    switch (label) {
      case "home":
      case "about":
        return (
          <>
            <h1 className="hero-major__title" id={titleId}>{title}</h1>
            <div className="hero-major__description">
              <p>
                {description}
              </p>
            </div>
            {getButtonsSectionHero(label)}
          </>
        );
      case "podcast":
        return (
          <>
            {getBodyHeroMajorPodcast(label)}
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
      {getBodyHeroMajor(label)}
    </div>
  );
};

export default HeroMajor;