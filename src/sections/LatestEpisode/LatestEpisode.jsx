import Section from '@/layouts/Section';
import './LatestEpisode.scss';
import Tabs from '@/components/Tabs';
import episodeGroupsData from '@/constants/episodeGroupsData';
import EpisodesCard from '@/components/EpisodeCard';

const LatestEpisode = () => {
  const tabsTitle = "latest-episode-tabs";

  return (
    <Section
      className="latest-episode"
      isContainer={false}
      mode="latest-episode"
      title="Latest Episode"
      titleId="latest-episode-title"
    >
      <Tabs
        className="latest-episode__tabs"
        title={tabsTitle}
        items={episodeGroupsData.map((episodeGroupData) => ({
          title: episodeGroupData.title,
          isActive: episodeGroupData.isActive,
          children: (
            <>
              <EpisodesCard dataCard={episodeGroupData.items}/>
            </>
          )
        }))}
      />
    </Section>
  );
};

export default LatestEpisode;