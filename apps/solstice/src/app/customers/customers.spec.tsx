import React from 'react';
import { render } from '@testing-library/react';

import { Customers } from './Customers';

describe(' Customers', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Customers customers={[]} />);
        expect(baseElement).toBeTruthy();
    });
});
