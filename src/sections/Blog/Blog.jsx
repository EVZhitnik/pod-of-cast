import Section from '@/layouts/Section';
import './Blog.scss';
import classNames from 'classnames';
import { Image } from 'minista';
import Quote from '@/components/Quote';

const Blog = () => {
  const quoteData = [
    {
      blockquote: "Quote example goes in here...",
      image: './src/assets/images/person/1.jpg',
      personName: 'John Smith,',
      platformIconName: 'spotify-quote',
      platform: 'Social Community Manager',
    }
  ];

  return (
    <section 
      className={classNames("blog", "section")}
      aria-label='blog-title'
    >
      <Image 
        className="blog__image" 
        src="./src/assets/images/blog/image-blog.jpg"
        alt="Girl is painting a wall" 
      />
      <div className="blog__inner container">
        <div className="blog__info">
          <h2 className="blog__info-title h3">Doodle for our podcast background room</h2>
          <ul className="blog__info-list">
            <li className="blog__info-item">
              <p>
                Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in.
              </p>
              <p>
                Sit vel, senectus iaculis morbi. <span>Amet</span> interdum imperdiet laoreet <span>morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a href="./">Orci non here</a>
              </p>
            </li>
            <li className="blog__info-item">
              <p>
                Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
              </p>
            </li>
          </ul>
        </div>
        {quoteData.map((items, index) => (
          <Quote className="blog__quote" mode="intro" quote={items} key={index} />
        ))}
        <div className="blog__text">
          <div className="blog__text-column">
            <h3 className="blog__text-title h4">Bullet list example:</h3>
            <ul className="blog__text-list">
              <li className="blog__text-item blog__text-item--circle">
                <p>
                  Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismodtellus duis curs us dignissim odio. Sit vulputate et integer in.
                </p>
              </li>
              <li className="blog__text-item blog__text-item--circle">
                <p>
                  Sit vel, senectus iaculis morbi. <span>Amet</span> interdum imperdiet laoreet <span>morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a href="./">Orci non here</a>
                </p>
              </li>
              <li className="blog__text-item blog__text-item--circle">
                <p>
                  Quis dictum cursus faucibus mattis dignissim. Pellent que <span>purus in sed</span> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                </p>
              </li>
            </ul>
          </div>
          <div className="blog__text-column">
            <h3 className="blog__text-title h4">Number list example:</h3>
            <ol className="blog__text-list">
              <li className="blog__text-item blog__text-item--num">
                <p>
                  Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismodtellus duis curs us dignissim odio. Sit vulputate et integer in.
                </p>
              </li>
              <li className="blog__text-item blog__text-item--num">
                <p>
                  Sit vel, senectus iaculis morbi. <span>Amet</span> interdum imperdiet laoreet <span>morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a href="./">Orci non here</a>
                </p>
              </li>
              <li className="blog__text-item blog__text-item--num">
                <p>
                  Quis dictum cursus faucibus mattis dignissim. Pellent que <span>purus in sed</span> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="blog__caption">
          <div className="blog__caption-column">
            <Image className="blog__caption-image" src="./src/assets/icons/caption-image-1.svg" />
            <p className="blog__caption-text">
              this is an image with a caption example
            </p>
          </div>
          <div className="blog__caption-column">
            <Image className="blog__caption-image" src="./src/assets/icons/caption-image-1.svg" />
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