import Section from '@/layouts/Section';
import './Our.scss';
import Slider from '@/components/Slider';
import IconLink from '@/components/IconLink';

const Our = () => {
  const ourCardData = [
    { 
      label: 'Google Podcasts',
      iconName: 'google-podcasts',
      description: <>Quis dictum cursus faucibus mattis <span className="our__card-description-accent">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</>
    },
    {
      label: 'Spotify',
      iconName: 'spotify',
      description: <>Quis dictum cursus faucibus mattis <span className="our__card-description-accent">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</>
    },
    {
      label: 'YouTube',
      iconName: 'youtube',
      description: <>Quis dictum cursus faucibus mattis <span className="our__card-description-accent">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</>
    },
    { 
      label: 'Google Podcasts',
      iconName: 'google-podcasts',
      description: <>Quis dictum cursus faucibus mattis <span className="our__card-description-accent">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</>
    },
    {
      label: 'Spotify',
      iconName: 'spotify',
      description: <>Quis dictum cursus faucibus mattis <span className="our__card-description-accent">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</>
    },
    {
      label: 'YouTube',
      iconName: 'youtube',
      description: <>Quis dictum cursus faucibus mattis <span className="our__card-description-accent">dignissim</span>. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</>
    },
  ];

  const iconSizes = {
    'google-podcasts': { width: 300, height: 54 },
    'spotify': { width: 194, height: 54 },
    'youtube': { width: 225, height: 54 },
  };

  return (
    <Section
      className="our"
      isContainer={false}
      mode="our"
      title="Our Sponsor"
      titleId="our-title"
      description="Our current official sponsor"
    >
      <Slider mode="our" labelSliderParams="default">
        {ourCardData.map(({ label, iconName, description }, index) => {
          const size = iconSizes[iconName];
  
          return (
            <article className="our__card" key={index}>
              <IconLink
                className="our__card-link"
                mode="our__card"
                title={label}
                iconName={iconName}
                width={size.width}
                height={size.height}
              />
              <div className="our__card-description">
                <p>{description}</p>
              </div>
            </article>
          );
        })}
      </Slider>
    </Section>
  );
};

export default Our;