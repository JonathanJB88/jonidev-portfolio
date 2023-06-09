import { ChangeEvent } from 'react';

import { OptionGroup } from '@/components';

interface FilterBarProps {
  onFilterChange: (value: string) => void;
  onSortChange: (value: string) => void;
  categories: string[];
  tags: string[];
}

export const FilterBar = ({ onFilterChange, onSortChange, categories, tags }: FilterBarProps) => {
  const handleChange = (handler: (value: string) => void) => (e: ChangeEvent<HTMLSelectElement>) => {
    handler(e.target.value);
  };

  return (
    <div className='flex flex-wrap items-center justify-between mb-2 md:mb-4 animate-slide-in'>
      <div className='flex flex-col items-center mb-2 md:flex-row md:mb-0 md:w-auto'>
        <label htmlFor='filter' className='mr-0 text-sm md:text-base md:mr-2 font-body'>
          Filter by:
        </label>
        <select
          name='filter'
          id='filter'
          onChange={handleChange(onFilterChange)}
          className='w-20 p-1 text-sm capitalize bg-gray-200 border border-gray-500 rounded md:text-base dark:border-gray-900 dark:bg-gray-700 font-body'
        >
          <option value='all'>All</option>
          <OptionGroup label='Category' options={categories} />
          <OptionGroup label='Tag' options={tags} />
        </select>
      </div>
      <div className='flex flex-col items-center mb-2 md:flex-row md:w-auto'>
        <label htmlFor='sort' className='mr-0 text-sm md:mr-2 font-body md:text-base'>
          Sort by:
        </label>
        <select
          name='sort'
          id='sort'
          onChange={handleChange(onSortChange)}
          className='w-20 p-1 text-sm capitalize bg-gray-200 border border-gray-500 rounded md:text-base dark:border-gray-900 dark:bg-gray-700 font-body'
        >
          <option value='date'>Date</option>
          <option value='title'>Title</option>
        </select>
      </div>
    </div>
  );
};
