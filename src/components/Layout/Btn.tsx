interface BtnProps {
  label: string;
  className?: string;
}

export const Btn = ({ label, className = 'px-3 py-1' }: BtnProps) => (
  <button
    className={`${className} font-semibold transition-colors duration-300
     border-2 rounded-md font-body dark:border-accent
      dark:hover:border-primary dark:bg-accent dark:hover:bg-primary
       text-secondary border-primary bg-primary
        hover:bg-accent hover:border-accent animate-slide-in`}
  >
    {label}
  </button>
);
