import Section from '@/layouts/Section';
import './News.scss';
import BaseCard from '@/components/BaseCard';
import Button from '@/components/Button';

const News = () => {
  const dataBaseCard = [
    {
      imgSrc: './src/assets/images/base-card/1.jpg',
      subtitle: 'Podcast',
      title: 'Setup Your Own Podcast',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
      tags: ['business', 'podcast', 'startup'],
      date: <><time datetime="2021-09-14">Sep 14, 2021</time></>
    },
    {
      imgSrc: './src/assets/images/base-card/2.jpg',
      subtitle: 'Tips & Trick',
      title: 'Doodle artwork 101',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
      tags: ['art', 'creative', 'tips and trick'],
      date: <><time datetime="2021-09-12">Sep 12, 2021</time></>
    },
  ];

  return (
    <Section
      className="news"
      title="Article and News"
      titleId="news-title"
      description="News, tips, tricks and more"
    >
      <BaseCard 
        className="news__card"
        mode="news"
        dataCard={dataBaseCard}
        isTitleTheLink={true}
      />
      <Button 
        className="news-card__link"
        href="/"
        label="Browse all"
      />
    </Section>
  );
};

export default News;