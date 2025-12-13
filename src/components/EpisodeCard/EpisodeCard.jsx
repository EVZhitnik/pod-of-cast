import './EpisodeCard.scss';
import { Image } from 'minista';
import Socials from '@/components/Socials';
import Tags from '@/components/Tags';
import platformGroupsData from '@/constants/platformGroupsData';

const EpisodeCard = (props) => {
  const {
    dataCard = [],
  } = props;

  return (
    <>
      {dataCard.map((cardItems, index) => {
        const {
          imgSrc,
          tags = [],
          number,
          title,
          href,
          description,
          hosted,
          avatarSrc = [],
        } = cardItems;

        return (
          <article className="episode-card" key={index}>
            <div className="episode-card__media">
              <Image
                className="episode-card__image" 
                src={imgSrc} 
                alt={`Image for ${title}`} 
              />
              <Socials 
                className='episode-card__soc1als' 
                mode="soc1als-base" 
                links={platformGroupsData[0].base}
              />
            </div>
            <div className="episode-card__content">
              <span className="episode-card__eps">{number}</span>
              <h3 className="episode-card__title h4">
                <a className="episode-card__link" href={href}>{title}</a>
              </h3>
              <div className="episode-card__description">
                <p>{description}</p>
              </div>
            </div>
            <Tags className="episode-card__tags" items={tags} />
            <div className="episode-card__hosted">
              <p className="episode-card__hosted-text">{hosted}</p>
              <div className="episode-card__hosted-images">
                {avatarSrc.map((srcImg, index) => (
                  <Image 
                    className='episode-card__hosted-avatar' 
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

export default EpisodeCard;