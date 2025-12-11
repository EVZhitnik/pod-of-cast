import classNames from 'classnames';
import './BaseCard.scss';
import { Image } from 'minista';
import IconLink from '@/components/IconLink';
import Tags from '../Tags';

const BaseCard = (props) => {
  const {
    mode = '',
    dataCard = [],
    isTitleTheLink = false,
    isSubscription = false,
  } = props;

  const socialsData = [
    {
      label: "Tiktok",
      iconName: "tiktok-base-card",
    },
    {
      label: "Twitter",
      iconName: "twitter-base-card",
    },
    {
      label: "Instagram",
      iconName: "instagram-base-card",
    },
  ];

  return (
    <>
      {dataCard.map((dataCardItems, index) => {
        const {
          imgSrc,
          subtitle,
          title,
          description,
          tags = [],
          date,
          sub,
        } = dataCardItems;

        const textImage = isTitleTheLink 
          ? `Read more about: ${title}`
          : `Photo by ${title}`
        ;

        return (
          <article className={classNames('base-card', {
            [`base-card--${mode}`]: mode,
          })} key={index}>
            <Image
              className="base-card__image" 
              src={imgSrc} 
              alt={textImage}
            />
            <div className="base-card__content">
              <div className="base-card__text">
                <span className="base-card__subtitle">{subtitle}</span>
                {isTitleTheLink ? (
                  <h3 className="base-card__title">
                    <a className="base-card__link" href="./">{title}</a>
                  </h3>
                ) : (
                  <h3 className="base-card__title">{title}</h3>
                )}
                <div className="base-card__description">{description}</div>
              </div>
              {isSubscription ? (
                <div className="base-card__subscription">
                  <span className="base-card__subscription-text">{sub}</span>
                  <div className="base-card__subscription-soc1als">
                    {socialsData.map(({ label, iconName }, index) => (
                      <IconLink 
                        className="base-card__subscription-soc1als-link"
                        mode="base-card"
                        title={label}
                        iconName={iconName}
                        width={20}
                        height={20}
                        key={index}                      
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="base-card__meta">
                  <Tags 
                    className="base-card__meta-tags"
                    items={tags}
                  />
                  <div className="base-card__meta-date">{date}</div>
                </div>
              )}
            </div>
          </article>
        )
      })}
    </>
  );
};

export default BaseCard;