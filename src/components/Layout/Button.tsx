export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const defaultClass = `font-semibold transition-colors duration-300 
  border-2 rounded-md font-body dark:border-accent 
  dark:hover:border-primary dark:bg-accent dark:hover:bg-primary 
  text-secondary border-primary bg-primary 
  hover:bg-accent hover:border-accent animate-slide-in`;

export const Button = ({ label, className = 'px-3 py-1', onClick }: ButtonProps) => (
  <button onClick={onClick} className={`${className} ${defaultClass}`}>
    {label}
  </button>
);
