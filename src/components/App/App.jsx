import classNames from 'classnames';
import './App.scss';
import IconLink from '@/components/IconLink';

const App = (props) => {
  const {
    className,
    links = [],
  } = props;

  return (
    <div className={classNames(className, 'app')}>
      <ul className="app__list">
        {links.map(({ label, iconName }, index) => (
          <li className="app__item" key={index}>
            <IconLink
              className="app__link"
              mode="app"
              title={label}
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;