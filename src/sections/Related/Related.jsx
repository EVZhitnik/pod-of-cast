import Section from '@/layouts/Section';
import './Related.scss';
import BaseCard from '@/components/BaseCard';
import dataBaseCard from '@/constants/dataBaseCard';
import Button from '@/components/Button';

const Related = () => {
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
          dataCard={dataBaseCard}
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