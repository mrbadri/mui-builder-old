import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HyperLink from './HyperLink';

describe('HyperLink component', () => {
  it('renders the link with correct href and content', () => {
    const testHref = 'https://example.com';
    const testContent = 'Example Link';

    render(<HyperLink href={testHref}>{testContent}</HyperLink>);

    const linkElement = screen.getByText(testContent);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', testHref);
  });
});
