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
