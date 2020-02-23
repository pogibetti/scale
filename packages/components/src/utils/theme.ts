import { combineObjects } from './utils';

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

const base: any = {
  unit: 'px',
  breakpoints: {
    mobile: 320,
    tablet: 767,
    desktop: 1024,
  },
  colors: {
    primary: 'green',
    secondary: 'red',
    black: '#000',
    white: '#fff',
  },
};

export const defaultTheme = {
  ...base,
  Button: {
    button: {
      color: '#fff',
      borderRadius: '4px',
    },
  },
};

export const theme = (overrides?: Partial<Theme>) => {
  const telements = (window as any).telements;
  if (telements) {
    const injectedConfig = telements.config;
    const injectedTheme = telements.theme;
    if (injectedTheme) {
      if (injectedConfig && injectedConfig.overrides === false) {
        return injectedTheme;
      }
      return combineObjects(defaultTheme, injectedTheme);
    }
  }
  return combineObjects(defaultTheme, overrides);
};
