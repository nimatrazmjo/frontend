import { render, screen } from '@testing-library/react';
import App from './App';

test('And raven nothing for nodded of', () => {
  render(<App />);
  const linkElement = screen.getByText(/And raven nothing for nodded of/i);

  expect(linkElement).toBeInTheDocument();
});
