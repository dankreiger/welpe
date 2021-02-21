import type { Theme } from '@graffft/theme';

/**
 * Button props
 * @public
 */
export interface IButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * ButtonSt props
 * @public
 */
export interface IButtonStProps {
  theme: Theme;
  primary: boolean;
  onClick?: () => void;
}
