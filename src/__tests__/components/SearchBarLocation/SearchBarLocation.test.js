import React from 'react';
import { render } from '@testing-library/react';
import SearchBarLocation from '../../../components/SearchBarLocation/SearchBarLocation';

describe('SearchBarLocation Component', () => {
  test('renders without props', () => {
    const { container } = render(<SearchBarLocation />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with props', () => {
    const filteredLocation = [
      { address: 'Location A' },
      { address: 'Location B' },
    ];

    const { container } = render(<SearchBarLocation filteredLocation={filteredLocation} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with empty props', () => {
    const filteredLocation = [];

    const { container } = render(<SearchBarLocation filteredLocation={filteredLocation} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
