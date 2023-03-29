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
    <div className='flex flex-wrap items-center justify-between mb-2 md:mb-4'>
      <div className='flex flex-col items-center mb-2 md:flex-row md:mb-0 md:w-auto'>
        <label htmlFor='filter' className='mr-0 md:mr-2 font-body'>
          Filter by:
        </label>
        <select
          name='filter'
          id='filter'
          onChange={handleFilterChange}
          className='w-20 p-1 capitalize bg-gray-200 border border-gray-500 rounded dark:border-gray-900 dark:bg-gray-700 font-body'
        >
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
      <div className='flex flex-col items-center mb-2 md:flex-row md:w-auto'>
        <label htmlFor='sort' className='mr-0 md:mr-2 font-body'>
          Sort by:
        </label>
        <select
          name='sort'
          id='sort'
          onChange={handleSortChange}
          className='w-20 p-1 capitalize bg-gray-200 border border-gray-500 rounded dark:border-gray-900 dark:bg-gray-700 font-body'
        >
          <option value='date'>Date</option>
          <option value='title'>Title</option>
        </select>
      </div>
    </div>
  );
};
