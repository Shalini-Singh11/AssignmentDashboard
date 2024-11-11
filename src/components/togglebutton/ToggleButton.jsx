import React, { useContext } from 'react';
import { ThemeContext } from './theme/ThemeContext';
import Button from '@mui/material/Button';

const ToggleButton = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ToggleButton;
