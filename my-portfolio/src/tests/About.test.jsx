import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../pages/About';

describe('About Page', () => {
  it('renders about information', () => {
    render(<About />);
    
    // Check if the heading is rendered
    expect(screen.getByText('About Me')).toBeInTheDocument();
    
    // Check if the descriptions are rendered
    expect(screen.getByText('I am a web developer with a passion for creating beautiful and functional websites.')).toBeInTheDocument();
    expect(screen.getByText('I have experience with HTML, CSS, JavaScript, and React. I am currently learning Node.js and Express.')).toBeInTheDocument();
  });
});