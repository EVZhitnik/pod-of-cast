import Section from '@/layouts/Section';
import './Intro.scss';
import Quote from '@/components/Quote';
import quoteGroupsData from '@/constants/quoteGroupsData';
import IconLink from '@/components/IconLink';

const Intro = () => {
  return (
    <Section 
      className="intro"
      mode="intro"
      title="Talk. Listen. Get inspired by every minute of it."
      titleId="intro-title"
    >
      <div className="intro__illustration">
        <div className="intro__illustration-column">
          <IconLink 
            mode="intro"
            isLink={false}
            title="illustration-1"
            iconName="illustration-1"
            width={275}
            height={275}
          />
          <div className="intro__illustration-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. 
            </p>
          </div>
        </div>
        <div className="intro__illustration-column">
          <IconLink 
            mode="intro"
            isLink={false}
            title="illustration-2"
            iconName="illustration-2"
            width={275}
            height={275}
          />
          <div className="intro__illustration-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. 
            </p>
          </div>
        </div>
      </div>
      {quoteGroupsData[0].intro.map((quoteGroupData, index) => (
        <Quote className="intro__quote" mode="intro" quote={quoteGroupData} key={index} />
      ))}
    </Section>
  );
};

export default Intro;