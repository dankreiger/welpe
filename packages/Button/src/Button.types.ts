import type { Theme } from '@welpe/theme';
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

export interface IButtonStProps {
  theme: Theme;
  primary: boolean;
  onClick?: () => void;
}
