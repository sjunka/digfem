import React from "react";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import { render } from "@testing-library/react-native";
import { shallow } from 'enzyme';
import Header from "../components/Header";


Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
    test("Should render with Welcome msg and userName", async () => {
        const component = render(<Header />);
        expect(component).toBeDefined();
        expect(component.getByText("Bienvenido de vuelta!")).toBeDefined();
        expect(component.getByText("Ruben Rodriguez")).toBeDefined();
    });


});

describe('Header', () => {
    it('should match snapshot', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
});