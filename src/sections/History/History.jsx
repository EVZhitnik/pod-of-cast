import Section from '@/layouts/Section';
import './History.scss';
import { Image } from 'minista';
import BaseCard from '@/components/BaseCard';
import baseCardGroupsData from '@/constants/baseCardGroupsData';

const History = () => {
  return (
    <Section
      className="history"
      mode = "history"
      title="What our listeners say"
      titleId="history-title"
      description="Their experience throughout every platform"
    >
      <div className="history__body container">
        <Image
          className="history__image" 
          src="./src/assets/images/history/history-image.jpg"  
          alt="Images with microphones"
        />
        <div className="history__content">
          <h3 className="history__content-title">About and History</h3>
          <ul className="history__list">
            <li className="history__item">
              <p>
                Eu non <span className="history__item-text-accent">diam</span> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <span className="history__item-text-accent">elementum pulvinar</span>.
              </p>
              <p>
                Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.
              </p>
            </li>
            <li className="history__item">
              <p>
                Lorem ipsum dolor sit amet, <span className="history__item-text-accent">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <span className="history__item-text-accent">Amet</span> interdum imperdiet laoreet <span className="history__item-text-accent">morbi</span> tincidunt fermentum, libero. Ante enim eget.
              </p>
              <p>
                Viverra at porttitor accumsan. <a href="./">Orci non here</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="history__footer container">
        <h3 className="history__footer-title">Founder and Main Host</h3>
        <div className="history__cards">
          <BaseCard 
            mode="history"
            dataCard={baseCardGroupsData[0].about}
            isSubscription={true}
          />
        </div>
      </div>
    </Section>
  );
};

export default History;