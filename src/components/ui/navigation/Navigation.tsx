import { ToggleButton, ToggleButtonGroup, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routerConfig';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const [navState, setNavState] = useState<string>('Home');
  const navigate = useNavigate();

  useEffect(() => {
    navigate(routes[navState as keyof typeof routes]);
  }, [navState]);

  const CustomToggleButton = styled(({ ...rest }) => (
    <ToggleButton {...rest} />
  ))`
    font-size: 1rem;
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16875rem;
    &.MuiToggleButton-root {
      border: none;
    }
    &.Mui-selected {
      background: none;
      color: white;
      border-bottom: 3px solid #fff;
    }
    &.MuiToggleButton-root:hover {
      background: none;
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }
  `;

  return (
    <div className={classes.wrapper}>
      <img src="src/assets/shared/logo.svg" />
      <hr className="relative z-50 flex-grow translate-x-12 border-white border-opacity-25" />
      <div>
        <nav className={classes.navbar}>
          <ToggleButtonGroup
            exclusive
            value={navState}
            className={classes['nav-toggle']}
            onChange={(e) => setNavState(e.target.value)}
          >
            <CustomToggleButton className={classes['nav-item']} value="home">
              <NavLink to="/">
                <b>00</b> HOME
              </NavLink>
            </CustomToggleButton>
            <CustomToggleButton
              className={classes['nav-item']}
              value="destination"
            >
              <NavLink to="/destination">
                <b>01</b> DESTINATION
              </NavLink>
            </CustomToggleButton>
            <CustomToggleButton className={classes['nav-item']} value="crew">
              <NavLink to="/crew">
                <b>02</b> CREW
              </NavLink>
            </CustomToggleButton>
            <CustomToggleButton
              className={classes['nav-item']}
              value="technology"
            >
              <NavLink to="/technology">
                <b>03</b> TECHNOLOGY
              </NavLink>
            </CustomToggleButton>
          </ToggleButtonGroup>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
