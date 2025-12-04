import classNames from 'classnames';
import './Quote.scss';
import { Image } from 'minista';
import Button from '@/components/Button';

const Quote = (props) => {
  const {
    className,
    mode = '',
    quote,
  } = props;

  const { blockquote, image, personName, platformIconName, department } = quote;

  return (
    <div className={classNames(className, 'quote', {[`quote--${mode}`]: mode})}>
      <div className="quote__body">
        <span className="quote__hooks">“</span>
        <blockquote className="quote__blockquote">{blockquote}</blockquote>
        <div className="quote__author">
          <Image className='quote__author-image' src={image} />
          <span className="quote__author-name">{personName}</span>
          <Button 
            className="quote__author-link-spotify" 
            href='/'
            mode={platformIconName} 
            label="Spotify"
            isLabelHidden  
            iconName={platformIconName}
          />
          <span className="quote__author-department">{department}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;