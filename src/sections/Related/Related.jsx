import Section from '@/layouts/Section';
import './Related.scss';
import BaseCard from '@/components/BaseCard';
import baseCardGroupsData from '@/constants/baseCardGroupsData';
import Button from '@/components/Button';

const Related = () => {
  const allSection = baseCardGroupsData[0].home.find(section => section.title === "All");
  const baseCardData = allSection?.items?.slice(0, 2) || [];

  return (
    <Section
      className="related"
      isContainer={false}
      mode="related"
      title="Related Article"
      titleId="related-title"
      description="News, Tips, Tricks and more"
      label="related"
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

export default Related;