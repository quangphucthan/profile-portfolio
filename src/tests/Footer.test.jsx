import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('renders the copyright information', () => {
    render(<Footer />);
    
    // Check if the copyright text is rendered
    expect(screen.getByText(/© 2025 Phuc Than. All rights reserved./i)).toBeInTheDocument();
  });
});