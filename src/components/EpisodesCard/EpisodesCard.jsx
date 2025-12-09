import classNames from 'classnames';
import './EpisodesCard.scss';
import { Image } from 'minista';
import Socials from '@/components/Socials';
import Tags from '@/components/Tags';

const EpisodesCard = (props) => {
  const {
    dataCard = [],
  } = props;

  const itemsPlatforms = [
    {label: 'Google Podcast', iconName: 'google-podcast-mini',},
    {label: 'Spotify', iconName: 'spotify-mini',},
    {label: 'You Tube',iconName: 'youtube-mini',},
  ];

  return (
    <>
      {dataCard.map((cardItems, index) => {
        const {
          imgSrc,
          tags = [],
          number,
          title,
          description,
          hosted,
          imgPersonSrc = [],
        } = cardItems;

        return (
          <article className="episodes-card" key={index}>
            <div className="episodes-card__image">
              <Image 
                src={imgSrc} 
                alt={`Image for ${title}`} 
              />
              <Socials 
                className='episodes-card__soc1als' 
                mode="soc1als-base" 
                links={itemsPlatforms}
              />
            </div>
            <div className="episodes-card__content">
              <span className="episodes-card__eps">{number}</span>
              <h3 className="episodes-card__title h4">
                <a className="episodes-card__link" href="./">{title}</a>
              </h3>
              <div className="episodes-card__description">
                <p>{description}</p>
              </div>
            </div>
            <Tags className="episodes-card__tags" items={tags} />
            <div className="episodes-card__hosted">
              <p className="episodes-card__hosted-text">{hosted}</p>
              <div className="episodes-card__hosted-images">
                {imgPersonSrc.map((srcImg, index) => (
                  <Image 
                    className='episodes-card__hosted-image' 
                    src={srcImg} 
                    key={index}
                    alt={`Avatar ${index + 1}`} 
                  />
                ))}
              </div>
            </div>
          </article>
        )})
      }
    </>   
  );
};

export default EpisodesCard;