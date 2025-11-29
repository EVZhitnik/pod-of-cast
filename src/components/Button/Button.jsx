import classNames from 'classnames';
import './Button.scss';
import Icon from '@/components/Icon';

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    mode = '',
    label,
    isLabelHidden = false,
    iconName,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? 'a' : 'button';
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;
  const title = isLabelHidden ? label : undefined;
  const iconComponent = iconName && <Icon className="button__icon" name={iconName}/>;

  return (
    <Component
      className={classNames(className, 'button', {[`button--${mode}`]: mode})}
      title={title}
      aria-label={title} 
      {...specificProps}
    >
      {iconComponent && iconComponent}
      {!isLabelHidden && (
        <span className='button__label'>{label}</span>
      )}
    </Component>
  );
};

export default Button;