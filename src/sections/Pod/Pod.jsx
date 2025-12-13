import Section from '@/layouts/Section';
import './Pod.scss';
import Button from '@/components/Button';
import Socials from '@/components/Socials';
import platformGroupsData from '@/constants/platformGroupsData';

const Pod = () => {
  return (
    <Section
      className="pod"
      isContainer={false}
      mode="pod"
      isBadge={true}
      title="Available now Pod of Cast App"
      titleId="pod-title"
      description="We just launched our podcast app!"
    >
      <div className="pod__content">
        <Button 
          className="pod__link"
          href="./"
          label="Download now"
        />
        <div className="pod__actions">
          <span className="pod__text">Content also available on:</span>
          <Socials 
            className='pod__soc1als' 
            mode="soc1als-pod" 
            links={platformGroupsData[0].base}
          />
        </div>
      </div>
    </Section>
  );
};

export default Pod;