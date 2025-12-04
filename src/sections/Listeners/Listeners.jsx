import Section from '@/layouts/Section';
import './Listeners.scss';
import Slider from '@/components/Slider';
import Quote from '@/components/Quote';

const Listeners = () => {
  const quoteItems = [
    {
      blockquote: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      image: './src/assets/images/person/2.jpg',
      personName: 'Luna lovegood,',
      platformIconName: 'spotify-quote',
      platform: 'Spotify',
    },
    {
      blockquote: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      image: './src/assets/images/person/3.jpg',
      personName: 'Emily Blunt,',
      platformIconName: 'google-podcast-listeners',
      platform: 'Google Podcast',
    },
    {
      blockquote: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      image: './src/assets/images/person/4.jpg',
      personName: 'Mia Winters,',
      platformIconName: 'apple-podcast-listeners',
      platform: 'Apple Podcast',
    },
    {
      blockquote: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      image: './src/assets/images/person/2.jpg',
      personName: 'Luna lovegood,',
      platformIconName: 'spotify-quote',
      platform: 'Spotify',
    },
    {
      blockquote: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      image: './src/assets/images/person/3.jpg',
      personName: 'Emily Blunt,',
      platformIconName: 'google-podcast-listeners',
      platform: 'Google Podcast',
    },
    {
      blockquote: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. ',
      image: './src/assets/images/person/4.jpg',
      personName: 'Mia Winters,',
      platformIconName: 'apple-podcast-listeners',
      platform: 'Apple Podcast',
    },
  ];
  
  return (
    <Section
      className="listeners"
      isContainer={false}
      title="What our listeners say"
      titleId="listeners-title"
      description="Their experience throughout every platform"
    >
      <Slider mode="listeners">
        {quoteItems.map((quoteData, index) => (
          <Quote 
            className="listeners__quote"
            mode="listeners" 
            quote={quoteData} 
            key={index} 
        />
        ))}
      </Slider>
    </Section>
  );
};

export default Listeners;