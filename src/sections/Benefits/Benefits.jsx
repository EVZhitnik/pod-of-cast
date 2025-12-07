import Section from '@/layouts/Section';
import './Benefits.scss';
import { Image } from 'minista';
import Button from '@/components/Button';

const Benefits = () => {
  const benefitsItems = [
    {
      imgSrc: './src/assets/icons/topic.svg',
      title: "Topic by Request",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      imgSrc: './src/assets/icons/content.svg',
      title: "Exclusive Content",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      imgSrc: './src/assets/icons/join.svg',
      title: "Join the Community",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      imgSrc: './src/assets/icons/access.svg',
      title: "Livestreaming Access",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      imgSrc: './src/assets/icons/merch.svg',
      title: "Exclusive Episodes & Merch",
      description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      imgSrc: './src/assets/icons/much.svg',
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
        {benefitsItems.map(({ imgSrc, title, description }, index) => (
          <li className="benefits__item" key={index}>
            <Image className='benefits__image' src={imgSrc} alt={`Icon for ${title}`} />
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