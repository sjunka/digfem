import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DetailScreen from '../screens/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('DetailScreen', () => {
    test('should render without data and navigate', async () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const component = render(<DetailScreen navigation={navigation} />);

        expect(component).toBeDefined();
        expect(component.getByText('No hay data disponible')).toBeDefined();

        expect(component.getByText('Volver')).toBeDefined();
        fireEvent.press(component.getByText('Volver'));
        expect(navigation.navigate).toHaveBeenCalledWith('Home');
        expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });
    test('Should render correctly and navigate', async () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const route = {
            params: {
                productItem: {
                    image: 'https://picsum.photos/200',
                    product: 'Producto',
                    createdAt: '2021-09-30T20:00:00.000Z',
                    points: 100,
                    is_redemption: false,
                },
            },
        };
        const component = render(
            <NavigationContainer>
                <DetailScreen navigation={navigation} route={route} />
            </NavigationContainer>,
        );
        expect(component).toBeDefined();
        expect(component.getByText('Producto')).toBeDefined();
        expect(
            component.getByText('Comprado el 30 de septiembre, 2021'),
        ).toBeDefined();
        expect(
            component.getByText('Con esta compra acumulaste:'),
        ).toBeDefined();
        expect(component.getByText('100 puntos')).toBeDefined();
        expect(component.getAllByLabelText('image_product')).toBeDefined();
        expect(component.getByText('Aceptar')).toBeDefined();
        fireEvent.press(component.getByText('Aceptar'));
        expect(navigation.navigate).toHaveBeenCalledWith('Home');
        expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });
});

describe('Footer', () => {
    it('should match snapshot', () => {
        const component = shallow(<DetailScreen />);
        expect(component).toMatchSnapshot();
    });
});
