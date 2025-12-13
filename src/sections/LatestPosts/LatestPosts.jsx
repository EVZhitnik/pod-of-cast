import Section from '@/layouts/Section';
import './LatestPosts.scss';
import Tabs from '@/components/Tabs';
import baseCardGroupsData from '@/constants/baseCardGroupsData';
import BaseCard from '@/components/BaseCard';

const LatestPosts = () => {
  const tabsTitle = "latest-posts-tabs";
  const baseCardData = baseCardGroupsData[0];

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
        items={baseCardData.home.map((section) => ({
          title: section.title,
          isActive: section.isActive || false, 
          children: (
            <BaseCard
              mode="news"
              dataCard={section.items}
              isTitleTheLink={true}
            />
          )
        }))}
      />
    </Section>
  );
};

export default LatestPosts;