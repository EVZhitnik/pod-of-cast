import classNames from 'classnames';
import './SliderNavigation.scss';
import Button from '@/components/Button';

const SliderNavigation = (props) => {
  const {
    className,
    id,
  } = props;

  return (
    <div 
      className={classNames(className, 'slider-navigation')} 
      id={id} 
      data-js-slider-navigation=""
    >
      <Button 
        className="slider-navigation__arrow-button"
        mode="slider-navigation-btn"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': '',
        }}
      />
      <Button 
        className="slider-navigation__arrow-button"
        mode="slider-navigation-btn"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': '',
        }}        
      />
    </div>
  );
};

export default SliderNavigation;