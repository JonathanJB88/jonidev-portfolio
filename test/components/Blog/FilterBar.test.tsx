import { render, fireEvent, screen } from '@testing-library/react';
import { FilterBar } from '@/components';

const onFilterChange = jest.fn();
const onSortChange = jest.fn();
const categories = ['JavaScript', 'React'];
const tags = ['Hooks', 'Context'];

describe('FilterBar', () => {
  beforeEach(() => {
    render(
      <FilterBar onFilterChange={onFilterChange} onSortChange={onSortChange} categories={categories} tags={tags} />
    );
  });

  it('should render the filter select with options and OptionGroup components', () => {
    const filterSelect = screen.getByRole('combobox', { name: /Filter by/i });
    expect(filterSelect).toBeInTheDocument();

    const allOption = screen.getByRole('option', { name: 'All' });
    expect(allOption).toBeInTheDocument();

    categories.forEach((category) => {
      const optionElement = screen.getByRole('option', { name: category });
      expect(optionElement).toBeInTheDocument();
    });

    tags.forEach((tag) => {
      const optionElement = screen.getByRole('option', { name: tag });
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('should render the sort select with options', () => {
    const sortSelect = screen.getByRole('combobox', { name: /Sort by/i });
    expect(sortSelect).toBeInTheDocument();

    ['Date', 'Title'].forEach((option) => {
      const optionElement = screen.getByRole('option', { name: option });
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('should call onFilterChange when filter select value changes', () => {
    const filterSelect = screen.getByRole('combobox', { name: /Filter by/i });
    fireEvent.change(filterSelect, { target: { value: 'category:JavaScript' } });

    expect(onFilterChange).toHaveBeenCalledTimes(1);
    expect(onFilterChange).toHaveBeenCalledWith('category:JavaScript');
  });

  it('should call onSortChange when sort select value changes', () => {
    const sortSelect = screen.getByRole('combobox', { name: /Sort by/i });
    fireEvent.change(sortSelect, { target: { value: 'title' } });

    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenCalledWith('title');
  });
});
