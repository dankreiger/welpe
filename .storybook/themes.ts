import type { Theme } from '@welpe/theme';

export enum Base {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Theme = {
  base: Base;
  backgroundColor: {
    primary: string;
    secondary: string;
  };
  color: {
    font: string;
    accent: string;
  };
};

const light: Theme = {
  base: Base.LIGHT,
  colors: {
    primary: '#0060df',
    secondary: '#fbfbfe',
    copy: '#000000',
  },
};

const dark: Theme = {
  base: Base.DARK,
  colors: {
    primary: '#17ed90',
    secondary: '#243133',
    copy: '#ffffff',
  },
};

export default {
  light,
  dark,
};
