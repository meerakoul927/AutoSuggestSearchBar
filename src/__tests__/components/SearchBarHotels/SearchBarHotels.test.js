import React from 'react';
import { render } from '@testing-library/react';
import SearchBarHotel from '../../../components/SearchBarHotels/SearchBarHotel';

describe('SearchBarHotel Component', () => {
  test('renders without props', () => {
    const { container } = render(<SearchBarHotel />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with props', () => {
    const filteredData = [
      { title: 'Hotel A', address: 'Address A' },
      { title: 'Hotel B', address: 'Address B' },
    ];

    const { container } = render(<SearchBarHotel filteredData={filteredData} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with empty props', () => {
    const filteredData = [];

    const { container } = render(<SearchBarHotel filteredData={filteredData} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
