interface Theme {
  unit: string;
  breakpoints: {
    [key: string]: string | number;
  };
  colors: {
    [key: string]: string;
  };
  Button: {
    [key: string]: string | object;
  };
}

export const defaultTheme: Theme = {
  unit: 'px',
  breakpoints: {
    mobile: 320,
    tablet: 767,
    desktop: 1024,
  },
  colors: {
    black: '#000',
    white: '#fff',
  },
  Button: {
    button: {
      background: 'blue',
      color: '#fff',
      borderRadius: '4px',
    },
  },
};

export const theme = (overrides?: Partial<Theme>) => {
  const injectedTheme = (window as any).theme;
  if (injectedTheme) {
    return injectedTheme;
  }
  return {
    ...defaultTheme,
    ...overrides,
  };
};
