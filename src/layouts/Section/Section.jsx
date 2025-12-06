import classNames from 'classnames';
import './Section.scss';
import Badge from '@/components/Badge';

const Section = (props) => {
  const {
    className,
    isContainer = true,
    isBadge = false,
    title,
    titleId,
    modeTitle = '',
    description,
    children,
  } = props;

  return (
    <section 
      className={classNames(className, 'section', {
        'container': isContainer,
      })}
      aria-label={titleId}
    >
      <header className="section__header">
        {isBadge && (
          <Badge 
            className="section__badge"
            mode="transparent"
          >
            Beta
          </Badge> 
        )}
        <h2 
          className={classNames('section__title', {
            [`section__title--${modeTitle}`]: modeTitle,
          })}
          id={titleId}
        >
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  );
};

export default Section;