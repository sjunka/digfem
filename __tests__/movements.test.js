import React from 'react';
import { render } from '@testing-library/react-native';
import Movements from '../components/Movements';

const mockData = [
    {
        createdAt: '2022-12-09T06:34:25.607Z',
        product: 'Wooden Fabric Salad',
        points: 16434,
        image: 'https://loremflickr.com/640/480/reaturant',
        is_redemption: false,
        id: '1',
    },
    {
        createdAt: '2022-12-09T00:30:23.966Z',
        product: 'Recicled Plastic Tuna',
        points: 23913,
        image: 'https://loremflickr.com/640/480/vehicle',
        is_redemption: true,
        id: '2',
    },
];

describe('MovementItem', () => {
    test('Should render without crash', () => {
        const navigation = { navigate: jest.fn() };
        const component = render(<Movements navigation={navigation} />);
        expect(component).toBeDefined();
        expect(component.getByText('No hay movimientos')).toBeDefined();
    });

    test('Should render flatlist correctly', () => {
        const navigation = { navigate: jest.fn() };
        const component = render(
            <Movements navigation={navigation} products={mockData} />,
        );
        expect(component).toBeDefined();
        const flatList = component.getByTestId('flatlist');
        expect(flatList).toBeDefined();
        expect(flatList.props.data).toEqual(mockData);
        expect(flatList.props.keyExtractor(mockData[0])).toEqual('1');
    });
});
