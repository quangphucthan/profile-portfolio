import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../pages/Projects';

describe('Projects Page', () => {
  it('renders projects information', () => {
    render(<Projects />);
    
    // Check if the heading is rendered
    expect(screen.getByText('Projects')).toBeInTheDocument();
    
    // Check if the description is rendered
    expect(screen.getByText('Here are some of the projects I have worked on.')).toBeInTheDocument();
    
    // Check if project cards are rendered
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('This is a project I worked on recently.')).toBeInTheDocument();
    
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('This is another project I worked on.')).toBeInTheDocument();
  });
});