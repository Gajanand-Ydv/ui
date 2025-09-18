import React from 'react';
import './themeButton.css';

// 1. Import your images from your assets folder
import moonIcon from '../assets/moon.png';
import sunIcon from '../assets/sun.png';

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  // 2. The useEffect for feather.replace() is no longer needed and has been removed.

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
      {/* 3. Replace the <i> tags with <img> tags */}
      {theme === 'light' ? (
        <img src={moonIcon} alt="Switch to dark mode" className="theme-icon" />
      ) : (
        <img src={sunIcon} alt="Switch to light mode" className="theme-icon" />
      )}
    </button>
  );
};

export default ThemeToggleButton;