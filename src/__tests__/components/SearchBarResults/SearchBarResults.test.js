import React from 'react';
import { render } from '@testing-library/react';
import SearchBarResults from '../../../components/SearchBarResults/SearchBarResults';

describe('SearchBarResults Component', () => {
  test('renders without props', () => {
    const { container } = render(<SearchBarResults />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with props', () => {
    const filteredData = [/* your data here */];
    const inputData = 'example input';
    const showResults = true;

    const { container } = render(
      <SearchBarResults
        filteredData={filteredData}
        inputData={inputData}
        showResults={showResults}
      />
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
