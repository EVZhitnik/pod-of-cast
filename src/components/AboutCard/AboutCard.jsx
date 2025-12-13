import './AboutCard.scss';

const AboutCard = (props) => {
  const {
    cardData = [],
  } = props;

  return (
    cardData.map(({ value, text }, index) => (
      <article className="about-card" key={index}>
        <span className="about-card__value">{value}</span>
        <span className="about-card__text">{text}</span>
      </article>
    ))
  );
};

export default AboutCard;