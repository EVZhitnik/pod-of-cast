import Section from '@/layouts/Section';
import './LatestEpisode.scss';
import Tabs from '@/components/Tabs';
import latestEpisodeGroups from './latestEpisodeGroups';
import EpisodesCard from '@/components/EpisodesCard';

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
        items={latestEpisodeGroups.map((latestEpisodeGroup) => ({
          title: latestEpisodeGroup.title,
          isActive: latestEpisodeGroup.isActive,
          children: (
            <>
              <EpisodesCard dataCard={latestEpisodeGroup.items}/>
            </>
          )
        }))}
      />
    </Section>
  );
};

export default LatestEpisode;