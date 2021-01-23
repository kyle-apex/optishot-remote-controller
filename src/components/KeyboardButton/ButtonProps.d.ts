export interface ButtonProps {
  error?: Error;
  children?: React.ReactNode;
  keyCode?: string;
  modifier?: string;
  secondKeyCode?: string;
  onClick?: () => void;
}
