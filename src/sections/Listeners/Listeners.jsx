import Section from '@/layouts/Section';
import './Listeners.scss';
import Slider from '@/components/Slider';
import Quote from '@/components/Quote';
import quoteGroupsData from '@/constants/quoteGroupsData';

const Listeners = () => {
  return (
    <Section
      className="listeners"
      isContainer={false}
      mode="listeners"
      title="What our listeners say"
      titleId="listeners-title"
      description="Their experience throughout every platform"
    >
      <Slider mode="listeners" labelSliderParams="default">
        {quoteGroupsData[0].listeners.map((quoteGroupData, index) => (
          <Quote 
            className="listeners__quote"
            mode="listeners" 
            quote={quoteGroupData} 
            key={index} 
          />
        ))}
      </Slider>
    </Section>
  );
};

export default Listeners;