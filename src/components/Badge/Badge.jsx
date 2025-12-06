import classNames from 'classnames';
import './Badge.scss';

const Badge = (props) => {
  const {
    className,
    mode = '',
    children,
  } = props;

  return (
    <div
      className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
      })}
    >
      <span>{children}</span>
    </div>
  );
};

export default Badge;