import ToggleGroup from '../../controls/toggle-group/ToggleGroup';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const names = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY'];

  return (
    <div className={classes.wrapper}>
      <img src="src/assets/shared/logo.svg" />
      <hr className={classes.hr} />
      <div>
        <nav className={classes.navbar}>
          <ToggleGroup names={names} />
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
