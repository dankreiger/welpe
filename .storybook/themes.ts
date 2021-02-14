import { Base, Theme } from '@welpe/theme';

type Theme = {
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
  backgroundColor: {
    primary: '#0060df',
    secondary: '#fbfbfe',
  },
  color: {
    font: '#000000',
    accent: '#fd6f53',
  },
};

const dark: Theme = {
  base: Base.DARK,
  backgroundColor: {
    primary: '#17ed90',
    secondary: '#243133',
  },
  color: {
    font: '#ffffff',
    accent: '#12cdea',
  },
};

export default {
  light,
  dark,
};
