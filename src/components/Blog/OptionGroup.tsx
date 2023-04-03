interface OptionGroupProps {
  label: string;
  options: string[];
}

export const OptionGroup = ({ label, options }: OptionGroupProps) => (
  <optgroup label={label === 'Category' ? 'Categories' : 'Tags'}>
    {options.map((option) => (
      <option key={option} value={`${label.toLowerCase()}:${option}`}>
        {option}
      </option>
    ))}
  </optgroup>
);
