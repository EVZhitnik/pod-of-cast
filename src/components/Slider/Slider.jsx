import 'swiper/css';
import './Slider.scss';
import SliderNavigation from './components/SliderNavigation';

const defaultSliderParams = {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      }
    },
    768: {
      slidesPerView: 'auto',
      centeredSlides: true,
      freeMode: false,
      autoplay: { 
        delay: 1000,
        disableOnInteraction: false,
      }
    },
    1440: {
      slidesPerView: 5,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      }
    }
  },
};

const Slider = (props) => {
  const {
    children,
    mode = false,
    hasNavigation = true,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
  } = props;

  const modSliderItem = mode ? `slider__item--${mode}` : '';
  const showNavigationInside = hasNavigation && !navigationTargetElementId;

  return (
    <div 
      className="slider" 
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId,
        hasNavigation,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li 
              className={`slider__item ${modSliderItem} swiper-slide`}
              key={index}
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>
      {showNavigationInside && (
        <SliderNavigation className="slider__navigation" />
      )}
    </div>
  );
};

export default Slider;