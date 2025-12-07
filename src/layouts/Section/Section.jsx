import classNames from 'classnames';
import './Section.scss';
import Badge from '@/components/Badge';

const Section = (props) => {
  const {
    className,
    isContainer = true,
    mode = '',
    isBadge = false,
    title,
    titleId,
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
      <div className="section__body">{children}</div>
    </section>
  );
};

export default Section;