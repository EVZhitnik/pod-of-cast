import classNames from 'classnames';
import './Section.scss';

const Section = (props) => {
  const {
    className,
    isContainer = true,
    title,
    titleId,
    modeTitle = '',
    description,
    children,
  } = props;

  const container = isContainer ? 'container' : '';

  return (
    <section 
      className={classNames(className, 'section', container)}
      aria-label={titleId}
    >
      <header className="section__header">
        <h2 
          className={`section__title section__title--${modeTitle}`}
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