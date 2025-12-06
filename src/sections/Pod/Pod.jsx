import Section from '@/layouts/Section';
import './Pod.scss';
import Button from '@/components/Button';
import Socials from '@/components/Socials';

const Pod = () => {
  const socialsData = [
    {
      label: 'Google Podcast',
      iconName: 'google-podcast-mini',
    },
    {
      label: 'Spotify',
      iconName: 'spotify-mini',
    },
    {
      label: 'You Tube',
      iconName: 'youtube-mini',
    },
  ];

  return (
    <Section
      className="pod"
      isContainer={false}
      isBadge={true}
      title="Available now Pod of Cast App"
      titleId="pod-title"
      modeTitle="pod"
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
            links={socialsData}
          />
        </div>
      </div>
    </Section>
  );
};

export default Pod;