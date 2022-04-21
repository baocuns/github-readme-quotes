// Define themes.
const themes = {
  light: {
    quote: '333',
    author: '2f80ed',
    background: 'fffefe',
    symbol: '4c71f2'
  },
  dark: {
    quote: '9f9f9f',
    author: 'fff',
    background: '151515',
    symbol: '79ff97'
  },
  radical: {
    quote: 'a9fef7',
    author: 'fe428e',
    background: '141321',
    symbol: 'f8d847'
  },
  merko: {
    quote: '68b587',
    author: 'abd200',
    background: '0a0f0b',
    symbol: 'b7d364'
  },
  gruvbox: {
    quote: '8ec07c',
    author: 'fabd2f',
    background: '282828',
    symbol: 'fe8019'
  },
  tokyonight: {
    quote: '38bdae',
    author: '70a5fd',
    background: '1a1b27',
    symbol: 'bf91f3'
  }
};

const renderTheme = theme => {
  // Check if theme exists in the themes object.
  if (themes[theme]) {
    return themes[theme];
  }

  // Else, return the light theme.
  return themes.light;
};

module.exports = { renderTheme, themes };
