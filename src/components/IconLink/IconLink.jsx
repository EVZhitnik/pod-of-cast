import classNames from 'classnames';

const IconLink = (props) => {
  const {
    className,
    mode = '',
    title,
    iconName,
    width,
    height,
    loading = 'lazy',
  } = props;

  const sizeMap = {
    app: { width: 36, height: 36 },
  };

  const { width: defaultWidth, height: defaultHeight } = sizeMap[mode] || {};

  const iconWidth = width || defaultWidth;
  const iconHeight = height || defaultHeight;

  return (
    <a
      className={classNames(className)}
      href="./"
      title={title}
      aria-label={title}
    >
      <img
        className={`${mode}__icon`}
        src={`./src/assets/icons/${iconName}.svg`}
        alt={title}
        width={iconWidth}
        height={iconHeight}
        loading={loading}
      />
    </a>
  );
};

export default IconLink;