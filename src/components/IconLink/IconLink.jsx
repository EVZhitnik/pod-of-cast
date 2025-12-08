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

  const getClassNameImgIconLink = (mode) => {
    switch (mode) {
      case "our__card":
        return (
          `${mode}-icon`
        );
      default:
        return (
          `${mode}__icon`
        );
    }
  };

  return (
    <a
      className={classNames(className)}
      href="./"
      title={title}
      aria-label={title}
    >
      <img
        className={getClassNameImgIconLink(mode)}
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