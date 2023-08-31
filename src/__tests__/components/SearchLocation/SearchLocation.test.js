import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchLocation from '../../../components/SearchLocation/SearchLocation';
import { MdLocationPin } from 'react-icons/Md';

describe('SearchLocation Component', () => {
  test('renders with props', () => {
    const output = {
      address: '123 Main St'
    };

    const { getByText, getByTestId } = render(<SearchLocation output={output} />);

    const addressElement = getByText('123 Main St');
    const iconElement = getByTestId('md-location-pin-icon');

    expect(addressElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('renders without props', () => {
    const { container } = render(<SearchLocation />);
    expect(container.firstChild).toBeNull();
  });
});
