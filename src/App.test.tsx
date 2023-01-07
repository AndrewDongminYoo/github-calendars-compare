import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
    const view = render(<App />);
    expect(view.baseElement).toBeInTheDocument();
});
