import classNames from 'classnames';
import './Section.scss';
import Badge from '@/components/Badge';

const Section = (props) => {
  const {
    className,
    isContainer = true,
    id,
    mode = '',
    isBadge = false,
    title,
    titleId,
    description,
    label = "",
    children,
  } = props;

  return (
    <section 
      className={classNames(className, 'section', {
        'container': isContainer,
      })}
      aria-label={titleId}
      id={id}
    >
      <header className={classNames("section__header", {
        [`section__header--${mode}`]: mode
      })}>
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
            [`section__title--${mode}`]: mode,
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
      {label === "related" ? (
        <div className="section__body">
          <div className="related__inner container">{children}</div>
        </div>
      ) : (
        <div className="section__body">{children}</div>
      )}
    </section>
  );
};

export default Section;