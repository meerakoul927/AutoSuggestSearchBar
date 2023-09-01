import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../../../components/SearchBar/SearchBar';

describe('SearchBar Component', () => {
  test('renders without props', () => {
    const { container } = render(<SearchBar />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
