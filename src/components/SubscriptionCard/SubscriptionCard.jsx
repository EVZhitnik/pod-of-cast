import './SubscriptionCard.scss';

const SubscriptionCard = (props) => {
  const {
    cardData = [],
  } = props;

  return (
    cardData.map(({ value, text }, index) => (
      <article className="subscription-card" key={index}>
        <span className="subscription-card__value">{value}</span>
        <span className="subscription-card__text">{text}</span>
      </article>
    ))
  );
};

export default SubscriptionCard;