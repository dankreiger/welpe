/**
 * @public
 */
export enum Base {
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * @public
 */
export type Theme = {
  base: Base;
  colors: {
    primary: string;
    secondary: string;
    copy: string;
  };
};
