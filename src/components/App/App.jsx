import classNames from 'classnames';
import './App.scss';
import IconLink from '@/components/IconLink';
import platformGroupsData from '@/constants/platformGroupsData';

const App = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(className, 'app')}>
      <ul className="app__list">
        {platformGroupsData[0].app.map(({ label, iconName }, index) => (
          <li className="app__item" key={index}>
            <IconLink
              className="app__link"
              mode="app"
              title={label}
              iconName={iconName}
              width={36}
              height={36}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;