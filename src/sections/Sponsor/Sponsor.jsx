import Section from '@/layouts/Section';
import './Sponsor.scss';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

const Sponsor = () => {
  const sponsorData = [
    {
      title: 'Member',
      description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
      price: '$9.99',
      month: '/month',
      subtitle: 'What’s included:',
      arrayBenefits: [
        'Exclusive Content', '5% Discount on Merch', 'Join the Community', 'Livestreaming Access',
      ]
    },
    {
      title: 'Family',
      badge: 'Most Popular',
      description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
      price: '$14.99',
      month: '/month',
      subtitle: 'What’s included:',
      arrayBenefits: [
        'Everything in Tier 1', 'Free tickets to Events', 'Limited Edition Merch', 'Promote your Product', 'Request Topic',
      ]
    },
    {
      title: 'Official',
      description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
      price: '$29.99',
      month: '/month',
      subtitle: 'What’s included:',
      arrayBenefits: [
        'Everything in Tier 2', 'Exclusive Badge on Livestreaming', 'Become an Official Sponsor', 'Early Access to All Episodes', 'Free Stikers and Merch',
      ]
    },
  ];

  return (
    <Section
      className="sponsor"
      title="Become our sponsor"
      titleId="sponsor-title"
      modeTitle="sponsor"
      description="Get exclusive episodes, merch and more"
    >
      <div className="sponsor__card">
        {sponsorData.map((sponsorItems, index) => {
          const {
            title,
            badge,
            description,
            price,
            month,
            subtitle,
            arrayBenefits = [],
          } = sponsorItems;

          return (
            <article className="sponsor-card" key={index}>
              <div className="sponsor-card__price">
                <div className="sponsor-card__price-text">
                  {badge ? (
                    <div className="sponsor-card__price-wrapper-title">
                      <h3 className="sponsor-card__price-title">{title}</h3>
                      <Badge
                        className="sponsor-card__price-badge"
                        mode="vermillion"
                      >
                        {badge}
                      </Badge>
                    </div>
                  ) : (
                    <h3 className="sponsor-card__price-title">{title}</h3>
                  )}

                  <div className="sponsor-card__price-description">
                    <p>{description}</p>
                  </div>
                </div>

                <div className="sponsor-card__price-actions">
                  <Button 
                    className="sponsor-card__link"
                    href="/"
                    label="Subscribe"
                  />
                  <div className="sponsor-card__price-value">
                    <span className="sponsor-card__price-amount">{price}</span>
                    <span className="sponsor-card__price-period">{month}</span>
                  </div>
                </div>
              </div>
              
              <div className="sponsor-card__benefits">
                <span className="sponsor-card__benefits-subtitle">{subtitle}</span>
                <ul className="sponsor-card__benefits-list">
                  {arrayBenefits.map((item, index) => (
                    <li className="sponsor-card__benefits-item" key={index}>
                      <p className="sponsor-card__benefits-text">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  );
};

export default Sponsor;