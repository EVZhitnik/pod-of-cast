import './IconLink.scss';
import classNames from 'classnames';

const IconLink = (props) => {
  const {
    className,
    mode = '',
    isLink = true,
    title,
    iconName,
    width,
    height,
    loading = 'lazy',
  } = props;

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
    isLink ? (
      <a
        className={classNames(className)}
        href="./"
        title={title}
        aria-label={title}
      >
        <img
          className={getClassNameImgIconLink(mode)}
          src={`./${iconName}.svg`}
          alt={title}
          width={width}
          height={height}
          loading={loading}
        />
      </a>
    ) : (
      <img
        className={getClassNameImgIconLink(mode)}
        src={`./${iconName}.svg`}
        alt={title}
        width={width}
        height={height}
        loading={loading}
      />
    )
  );
};

export default IconLink;