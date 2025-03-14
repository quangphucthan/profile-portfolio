import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renders welcome message and description', () => {
    render(<Home />);
    
    // Check if the heading is rendered
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument();
    
    // Check if the description is rendered
    expect(screen.getByText('This is a simple portfolio website created using React.')).toBeInTheDocument();
  });
});