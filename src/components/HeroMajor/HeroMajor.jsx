import classNames from 'classnames';
import './HeroMajor.scss';
import Button from '@/components/Button';
import HeroCard from '@/components/HeroCard';
import Badge from '@/components/Badge';
import { Image } from 'minista';
import Tags from '@/components/Tags';
import Socials from '@/components/Socials';
import Icon from '@/components/Icon';
import socialGroupsData from '@/constants/socialGroupsData';

const HeroMajor = (props) => {
  const {
    className,
    label = '',
    mode = label,
    titleId,
    linkToBack,
    date,
    subtitle,
    title,
    description,
    tags = [],
  } = props;

  const getButtonsSectionHero = (label) => {
    const baseButton = (
      <Button 
        className="hero-major__link"
        href="./"
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
        );
      default:
        break;
    }
  };

  const getBodyHeroMajorPodcast = (label) => {
    const arrayTags = ['mind-behaviour', 'health'];

    return (
      <div className="hero-major__info container">
        <div className="hero-major__info-header">
          <HeroCard className="hero-major__card" title="Perplexed Mind" />
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
                  src="./src/assets/images/avatar/5.jpg"
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
  };

  const getBodyHeroMajorSingleBlog = () => {
    return (
      <>
        <div className="hero-major__header container">
          <div className="hero-major__back">
            <Icon className="hero-major__back-icon" name="arrow-left-single" />
            <a className="hero-major__back-link" href="/">{linkToBack}</a>
          </div>
          <div className="hero-major__date">{date}</div>
        </div>
        <div className="hero-major__text">
          <span className="hero-major__subtitle">{subtitle}</span>
          <h1 className="hero-major__title h2" id={titleId}>{title}</h1>
        </div>
        <Tags className="hero-major__tags" items={tags} />
        <Socials 
          className="hero-major__soc1als" 
          mode="soc1als-footer" 
          links={socialGroupsData[0].footer}
        />
      </>
    );
  };

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
        );
      case "blog":
        return (
          <>
            <h1 className="hero-major__title" id={titleId}>{title}</h1>
            <div className="hero-major__description">
              <p>
                {description}
              </p>
            </div>
          </>          
        );
      case "single-blog":
        return (
        <>
          {getBodyHeroMajorSingleBlog()}
        </>
        );
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