import { ChangeEvent } from 'react';

interface FilterBarProps {
  onFilterChange: (value: string) => void;
  onSortChange: (value: string) => void;
  categories: string[];
  tags: string[];
}

export const FilterBar = ({ onFilterChange, onSortChange, categories, tags }: FilterBarProps) => {
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <div className='flex flex-wrap items-center justify-between mb-4'>
      <div className='w-full mb-4 sm:w-auto sm:mb-0'>
        <label htmlFor='filter' className='mr-2'>
          Filter by:
        </label>
        <select name='filter' id='filter' onChange={handleFilterChange} className='p-2 border border-gray-300 rounded'>
          <option value='all'>All</option>
          <optgroup label='Categories'>
            {categories.map((category) => (
              <option key={category} value={`category:${category}`}>
                {category}
              </option>
            ))}
          </optgroup>
          <optgroup label='Tags'>
            {tags.map((tag) => (
              <option key={tag} value={`tag:${tag}`}>
                {tag}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      <div className='w-full sm:w-auto'>
        <label htmlFor='sort' className='mr-2'>
          Sort by:
        </label>
        <select name='sort' id='sort' onChange={handleSortChange} className='p-2 border border-gray-300 rounded'>
          <option value='date'>Date</option>
          <option value='title'>Title</option>
        </select>
      </div>
    </div>
  );
};
