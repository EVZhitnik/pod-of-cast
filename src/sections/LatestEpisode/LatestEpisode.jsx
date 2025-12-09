import Section from '@/layouts/Section';
import './LatestEpisode.scss';
import Tabs from '@/components/Tabs';
import latestEpisodeGroups from './latestEpisodeGroups';
import EpisodesCard from '@/components/EpisodesCard';
import TabsNavigation from '@/components/Tabs/components/TabsNavigation';

const LatestEpisode = () => {
  const tabsTitle = "latest-episode-tabs";
  const tabsNavigationId = "latest-episode-navigation";

  return (
    <Section
      className="latest-episode"
      isContainer={false}
      mode="latest-episode"
      title="Latest Episode"
      titleId="latest-episode-title"
    >
      <Tabs
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