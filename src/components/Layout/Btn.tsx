interface BtnProps {
  label: string;
  className?: string;
}

export const Btn = ({ label, className = 'px-4 py-2' }: BtnProps) => (
  <button
    className={`${className} font-semibold transition-colors duration-300 border-2 rounded-md font-body text-accent border-accent hover:bg-accent-hover hover:text-primary`}
  >
    {label}
  </button>
);
