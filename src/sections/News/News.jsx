import Section from '@/layouts/Section';
import './News.scss';
import BaseCard from '@/components/BaseCard';
import Button from '@/components/Button';
import baseCardGroupsData from '@/constants/baseCardGroupsData';

const News = () => {
  const allSection = baseCardGroupsData[0].home.find(section => section.title === "All");
  const baseCardData = allSection?.items?.slice(0, 2) || [];
    
  return (
    <Section
      className="news"
      title="Article and News"
      titleId="news-title"
      description="News, tips, tricks and more"
    >
      <div className="news__card">
        <BaseCard 
          mode="news"
          dataCard={baseCardData}
          isTitleTheLink={true}
        />
      </div>
      <Button 
        className="news-card__link"
        href="/"
        label="Browse all"
      />
    </Section>
  );
};

export default News;