import './Blog.scss';
import classNames from 'classnames';
import { Image } from 'minista';
import Quote from '@/components/Quote';
import quoteGroupsData from '@/constants/quoteGroupsData';
import IconLink from '@/components/IconLink';

const Blog = () => {
  return (
    <section 
      className={classNames("blog", "section")}
      aria-label="blog-title"
    >
      <Image 
        className="blog__image" 
        src="./src/assets/images/blog/image-blog.jpg"
        alt="Girl is painting a wall" 
      />
      <div className="blog__inner container">
        <div className="blog__info">
          <h2 className="blog__info-title h3" id="blog-title">Doodle for our podcast background room</h2>
          <ul className="blog__info-list">
            <li className="blog__info-item">
              <p>
                Lorem ipsum dolor sit amet, <span className="blog__text-accent">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in.
              </p>
              <p>
                Sit vel, senectus iaculis morbi. <span className="blog__text-accent">Amet</span> interdum imperdiet laoreet <span className="blog__text-accent">morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a href="./">Orci non here</a>
              </p>
            </li>
            <li className="blog__info-item">
              <p>
                Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
              </p>
            </li>
          </ul>
        </div>
        {quoteGroupsData[0].blog.map((quoteGroupData, index) => (
          <Quote className="blog__quote" mode="intro" quote={quoteGroupData} key={index} />
        ))}
        <div className="blog__text">
          <div className="blog__text-column">
            <h3 className="blog__text-title h4">Bullet list example:</h3>
            <ul className="blog__text-list">
              <li className="blog__text-item blog__text-item--circle">
                <p>
                  Lorem ipsum dolor sit amet, <span className="blog__text-accent">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismodtellus duis curs us dignissim odio. Sit vulputate et integer in.
                </p>
              </li>
              <li className="blog__text-item blog__text-item--circle">
                <p>
                  Sit vel, senectus iaculis morbi. <span className="blog__text-accent">Amet</span> interdum imperdiet laoreet <span className="blog__text-accent">morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a href="./">Orci non here</a>
                </p>
              </li>
              <li className="blog__text-item blog__text-item--circle">
                <p>
                  Quis dictum cursus faucibus mattis dignissim. Pellent que <span className="blog__text-accent">purus in sed</span> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                </p>
              </li>
            </ul>
          </div>
          <div className="blog__text-column">
            <h3 className="blog__text-title h4">Number list example:</h3>
            <ol className="blog__text-list">
              <li className="blog__text-item blog__text-item--num">
                <p>
                  Lorem ipsum dolor sit amet, <span className="blog__text-accent">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismodtellus duis curs us dignissim odio. Sit vulputate et integer in.
                </p>
              </li>
              <li className="blog__text-item blog__text-item--num">
                <p>
                  Sit vel, senectus iaculis morbi. <span className="blog__text-accent">Amet</span> interdum imperdiet laoreet <span className="blog__text-accent">morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a href="./">Orci non here</a>
                </p>
              </li>
              <li className="blog__text-item blog__text-item--num">
                <p>
                  Quis dictum cursus faucibus mattis dignissim. Pellent que <span className="blog__text-accent">purus in sed</span> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="blog__caption">
          <div className="blog__caption-column">
            <IconLink 
              mode="blog"
              isLink={false}
              title="Image caption №1"             
              iconName="caption-image-1"
              width={570}
              height={400}
            />
            <p className="blog__caption-text">
              this is an image with a caption example
            </p>
          </div>
          <div className="blog__caption-column">
            <IconLink 
              mode="blog"
              isLink={false}
              title="Image caption №1"             
              iconName="caption-image-1"
              width={570}
              height={400}
            />
            <p className="blog__caption-text">
              this is an image with a caption example
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;