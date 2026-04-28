import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('App Component', () => {
  it('renders the Hero section by default', () => {
    render(<App />);
    expect(screen.getByText(/Master the Indian/i)).toBeInTheDocument();
    expect(screen.getByText(/Election Process/i)).toBeInTheDocument();
  });

  it('navigates to the Process page when clicking "Process"', () => {
    render(<App />);
    const processBtn = screen.getByRole('menuitem', { name: /Election Process Guide/i });
    fireEvent.click(processBtn);
    // Check if Timeline is rendered (Timeline has "Election Process Timeline" heading)
    expect(screen.getByText(/Election Process Timeline/i)).toBeInTheDocument();
  });

  it('navigates to the Checklist page when clicking "Checklist"', () => {
    render(<App />);
    const checklistBtn = screen.getByRole('menuitem', { name: /Voter Checklist/i });
    fireEvent.click(checklistBtn);
    // Check if VoterChecklist is rendered
    expect(screen.getByText(/Voter Readiness Checklist/i)).toBeInTheDocument();
  });

  it('opens the Assistant Chat when clicking the trigger', () => {
    render(<App />);
    const chatTrigger = screen.getByLabelText(/Open Assistant/i);
    fireEvent.click(chatTrigger);
    expect(screen.getByRole('dialog', { name: /Election Assistant Chat/i })).toBeInTheDocument();
  });

  it('has semantic landmarks', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /Main Navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // footer
  });
});
