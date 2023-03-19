/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the app', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('The Sample Card');
    
  });
});
