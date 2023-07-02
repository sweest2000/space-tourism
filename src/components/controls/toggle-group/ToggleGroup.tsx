import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ToggleGroup.module.scss';

const ToggleGroup = ({ names }) => {
  const [navState, setNavState] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // navigate(`/${navState}`);
    // navigate(routes[navState as keyof typeof routes]);
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
    <div>
      <ToggleButtonGroup
        exclusive
        value={navState}
        className={classes['nav-toggle']}
        onChange={(e) => setNavState(e.target.value)}
      >
        {names?.map((item) => (
          <CustomToggleButton
            key={item}
            className={classes['nav-item']}
            value={item.split(' ').pop().toLowerCase()}
          >
            {item}
          </CustomToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleGroup;
