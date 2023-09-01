import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import SearchResults from '../../../components/SearchResults/SearchResults';
import { LuHotel } from 'react-icons/Lu';

describe('SearchResults Component', () => {
  test('renders with props', () => {
    const result = {
      title: 'Example Hotel',
      address: '123 Main St'
    };

    const { getByText, getByTestId } = render(<SearchResults result={result} />);

    const titleElement = getByText('Example Hotel');
    const addressElement = getByText('123 Main St');
    const iconElement = getByTestId('lu-hotel-icon');

    expect(titleElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('renders without props', () => {
    const { container } = render(<SearchResults />);
    expect(container.firstChild).toBeNull();
  });
  test('reacts to user click', () => {
    const result = {
      title: 'Example Hotel',
      address: '123 Main St'
    };

    const { getByTestId } = render(<SearchResults result={result} />);
    const iconElement = getByTestId('lu-hotel-icon');
    fireEvent.click(iconElement);

   
  });

  
});
