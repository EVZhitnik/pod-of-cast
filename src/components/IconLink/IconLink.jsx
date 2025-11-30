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
    platforms: {width: 122, height: 22},
    app: {width: 36, height: 36},
  };

  const { width: defaultWidth, height: defaultHeight } = sizeMap[mode] || {};

  let iconWidth = width || defaultWidth;
  let iconHeight = height || defaultHeight;

  return (
    <a
      className={classNames(className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className={`${mode}__image`}
        src={`./src/assets/icons/${iconName}.svg`}
        alt=""
        width={iconWidth}
        height={iconHeight}
        loading={loading}
      />
    </a>
  );
};

export default IconLink;