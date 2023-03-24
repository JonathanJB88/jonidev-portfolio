interface BtnProps {
  label: string;
}

export const Btn = ({ label }: BtnProps) => {
  return (
    <button className='px-4 py-2 font-semibold transition-colors duration-300 border-2 rounded-md font-body text-accent border-accent hover:bg-accent-hover hover:text-primary'>
      {label}
    </button>
  );
};
