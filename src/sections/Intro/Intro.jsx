import Section from '@/layouts/Section';
import './Intro.scss';
import { Image } from 'minista';
import Quote from '@/components/Quote';

const Intro = () => {
  const quoteItems = [
    {
      blockquote: <>One of the best daily podcasts that <br />covers every topic on Spotify.</>,
      image: './src/assets/images/person/1.jpg',
      personName: 'John Smith,',
      platformIconName: 'spotify-quote',
      platform: 'Social Community Manager',
    }
  ];

  return (
    <Section 
      className="intro"
      title="Talk. Listen. Get inspired by every minute of it."
      titleId="intro-title"
      modeTitle="intro"
    >
      <div className="intro__illustration">
        <div className="intro__illustration-column">
          <Image src='./src/assets/images/intro/illustration-1.svg' />
          <div className="intro__illustration-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. 
            </p>
          </div>
        </div>
        <div className="intro__illustration-column">
          <Image src='./src/assets/images/intro/illustration-2.svg' />
          <div className="intro__illustration-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. 
            </p>
          </div>
        </div>
      </div>
      {quoteItems.map((quoteData, index) => (
        <Quote className="intro__quote" mode="intro" quote={quoteData} key={index} />
      ))}

    </Section>
  );
};

export default Intro;