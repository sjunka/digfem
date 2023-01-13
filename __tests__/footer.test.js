import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import Footer from '../components/Footer';

const mockFilterTrue = jest.fn();
const mockFilterFalse = jest.fn();
const mockNotFiltered = jest.fn();

afterEach(() => {
    mockFilterTrue.mockClear();
    mockFilterFalse.mockClear();
    mockNotFiltered.mockClear();
});

describe('Footer', () => {
    test('Should render correctly', () => {
        const component = render(
            <Footer
                filterTrue={mockFilterTrue}
                filterFalse={mockFilterFalse}
                notFiltered={mockNotFiltered}
            />,
        );
        expect(component).toBeDefined();
        expect(component.getByTestId('button-filterFalse')).toBeDefined();

        expect(component.getByTestId('button-filterTrue')).toBeDefined();
    });

    test('Should not filter with notFiltered', () => {
        const component = render(
            <Footer
                filterTrue={mockFilterTrue}
                filterFalse={mockFilterFalse}
                notFiltered={mockNotFiltered}
            />,
        );

        expect(component).toBeDefined();
        const buttonFilterFalse = component.getByTestId('button-filterFalse');
        const buttonFilterTrue = component.getByTestId('button-filterTrue');

        fireEvent.press(buttonFilterFalse);

        expect(mockFilterFalse).toHaveBeenCalled();
        const buttonNotFiltered = component.getByTestId(
            'footer-button-noFilter',
        );

        expect(buttonNotFiltered).toBeDefined();

        fireEvent.press(buttonNotFiltered);

        expect(mockNotFiltered).toHaveBeenCalled();
        expect(mockFilterTrue).not.toHaveBeenCalled();
        expect(buttonFilterFalse).toBeDefined();
        expect(buttonFilterTrue).toBeDefined();
    });
});

describe('Footer snapshot', () => {
    it('should match snapshot', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
});
