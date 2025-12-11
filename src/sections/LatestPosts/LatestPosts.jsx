import Section from '@/layouts/Section';
import './LatestPosts.scss';
import Tabs from '@/components/Tabs';
import latestPostsGroups from './latestPostsGroups';
import BaseCard from '@/components/BaseCard';

const LatestPosts = () => {
  const tabsTitle = "latest-posts-tabs";

  return (
    <Section
      className="latest-posts"
      isContainer={false}
      mode="latest-posts"
      title="Latest Posts"
      titleId="latest-posts-title"
    >
      <Tabs
        className="latest-posts__tabs"
        title={tabsTitle}
        items={latestPostsGroups.map((latestPostsGroup) => ({
          title: latestPostsGroup.title,
          isActive: latestPostsGroup.isActive,
          children: (
            <>
              <BaseCard
                mode="news"
                dataCard={latestPostsGroup.items}
                isTitleTheLink={true}
              />
            </>
          )
        }))}
      />
    </Section>
  );
};

export default LatestPosts;