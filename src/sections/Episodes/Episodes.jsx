import Section from '@/layouts/Section';
import './Episodes.scss';
import EpisodesCard from '@/components/EpisodesCard';
import episodesCardsData from './episodesCardsData';
import Button from '@/components/Button';

const Episodes = () => {
  return (
    <Section
      className="episodes"
      isContainer={false}
      title="Recent Episodes"
      titleId="episodes-title"
      description="Available on your favorite platform"
    >
      <EpisodesCard 
        className="episodes__card"
        dataCard={episodesCardsData}
      />
      <Button 
        className="episodes__button"
        href="/"
        label="Browse All Episodes"
      />
    </Section>
  );
};

export default Episodes;