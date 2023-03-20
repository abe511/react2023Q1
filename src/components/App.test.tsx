/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import AppWrapper from './AppWrapper';

describe('App', () => {
  it('renders the app', () => {
    render(<AppWrapper />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Main Page');
  });

  it('renders Not Found page if the route is not valid', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent_route']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
