import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import NotFound from '../pages/NotFound';

describe('NotFound Page', () => {
  it('renders 404 page with link to home', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    
    // Check if 404 message is rendered
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    
    // Check if the home link is rendered
    const homeLink = screen.getByText('Go back to home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.tagName).toBe('A');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});