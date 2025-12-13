import classNames from 'classnames';
import './Quote.scss';
import { Image } from 'minista';
import IconLink from '@/components/IconLink';

const Quote = (props) => {
  const {
    className,
    mode = '',
    quote = {},
  } = props;

  const { blockquote, avatarSrc, name, label, iconName, text } = quote;

  return (
    <div className={classNames(className, 'quote', {[`quote--${mode}`]: mode})}>
      <span className="quote__hooks">“</span>
      <blockquote className="quote__blockquote">{blockquote}</blockquote>
      <div className="quote__author">
        <Image 
          className='quote__author-avatar' 
          src={avatarSrc} 
          alt={`Portrait of ${name}`}
        />
        <span className="quote__author-name">{name}</span>
        <IconLink 
          className="quote__author-link"
          mode="quote"
          title={label}
          iconName={iconName}
          width={16}
          height={16}
        />
        <span className="quote__author-text">{text}</span>
      </div>
    </div>
  );
};

export default Quote;