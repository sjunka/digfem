import React from 'react';
import {render} from '@testing-library/react-native';
import TotalPointsCard from '../components/TotalPointsCard';

describe('TotalPointsCard', () => {
    test('Should render, no data, no crash', async () => {
        const component = render(<TotalPointsCard />);
        expect(component).toBeDefined();
        expect(component.getByText('TUS PUNTOS')).toBeDefined();
        expect(component.getByText('Diciembre')).toBeDefined();
        expect(component.getByText('0.00 pts')).toBeDefined();
    });
});
