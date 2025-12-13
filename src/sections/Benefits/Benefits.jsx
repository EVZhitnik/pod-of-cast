import Section from '@/layouts/Section';
import './Benefits.scss';
import IconLink from '@/components/IconLink';
import Button from '@/components/Button';

const Benefits = () => {
  const benefitsData = [
    {
      label: "Icon Topic by Request",
      iconName: "topic",
      title: "Topic by Request",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      label: "Icon Exclusive Content",
      iconName: "content",
      title: "Exclusive Content",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      label: "Icon Join the Community",
      iconName: "join",
      title: "Join the Community",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      label: "Icon Livestreaming Access",
      iconName: "access",
      title: "Livestreaming Access",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      label: "Icon Exclusive Episodes & Merch",
      iconName: "merch",
      title: "Exclusive Episodes & Merch",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      label: "Icon And much more!",
      iconName: "much",
      title: "And much more!",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <Section
      className="benefits"
      mode="benefits"
      title="Membership benefits"
      titleId="benefits-title"
      description="Become our sponsor and get all benefits"
    >
      <ul className="benefits__list">
        {benefitsData.map(({ label, iconName, title, description }, index) => (
          <li className="benefits__item" key={index}>
            <IconLink 
              mode="benefits"
              isLink={false}
              title={label}              
              iconName={iconName}
              width={78}
              height={78}
              key={index}                      
            />
            <h3 className="benefits__title h4">{title}</h3>
            <div className="benefits__description">
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button 
        className="benefits__link"
        href="/"
        label="See Pricing"
      />
    </Section>
  );
};

export default Benefits;