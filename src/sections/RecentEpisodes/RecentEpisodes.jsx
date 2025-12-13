import Section from '@/layouts/Section';
import './RecentEpisodes.scss';
import EpisodesCard from '@/components/EpisodeCard';
import episodeGroupsData from '@/constants/episodeGroupsData';
import Button from '@/components/Button';

const RecentEpisodes = () => {
  return (
    <Section
      className="recent-episodes"
      isContainer={false}
      id="episodes"
      title="Recent Episodes"
      titleId="recent-episodes-title"
      description="Available on your favorite platform"
    >
      <div className="recent-episodes__card container">
        <EpisodesCard 
          dataCard={episodeGroupsData[0].items}
        />
      </div>
      <Button 
        className="recent-episodes__button"
        href="/"
        label="Browse All Episodes"
      />
    </Section>
  );
};

export default RecentEpisodes;