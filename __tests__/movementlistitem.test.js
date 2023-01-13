import React from "react";

import { render, fireEvent } from "@testing-library/react-native";

import MovementListItem from "../components/MovementListItem";

describe("MovementListItem", () => {
    test("Should render is_redemption false", () => {
        const productItem = {
            createdAt: "2022-12-09T06:34:25.607Z",
            product: "Wodden Salad",
            points: 16434,
            image: "https://loremflickr.com/640/480/transport",
            is_redemption: false,
            id: "1",
        };
        const navigation = { navigate: jest.fn() };
        const component = render(
            <MovementListItem productItem={productItem} navigation={navigation} />
        );
        expect(component).toBeDefined();
        expect(component.getAllByLabelText("Image product item")).toBeDefined();
        expect(component.getByText("Wodden Salad")).toBeDefined();
        expect(component.getByText("9 de diciembre, 2022")).toBeDefined();
        expect(component.getByText("16434")).toBeDefined();
        expect(component.getByTestId("plus-icon")).toBeDefined();
        expect(component.getByTestId("chevron-icon")).toBeDefined();

        const goDetail = component.getByTestId("movement-item");
        fireEvent.press(goDetail);
        expect(navigation.navigate).toHaveBeenCalledWith("Detail", {
            productItem,
        });
        expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });

    test("Should render is_redemption true", () => {
        const productItem = {
            createdAt: "2022-12-09T00:30:23.966Z",
            product: "Amazing Plastic Keyboard",
            points: 23913,
            image: "https://loremflickr.com/640/480/city",
            is_redemption: true,
            id: "4",
        };
        const navigation = { navigate: jest.fn() };
        const component = render(
            <MovementListItem productItem={productItem} navigation={navigation} />
        );
        expect(component).toBeDefined();
        expect(component.getAllByLabelText("Image product item")).toBeDefined();
        expect(component.getByText("Amazing Plastic Keyboard")).toBeDefined();
        expect(component.getByText("8 de diciembre, 2022")).toBeDefined();
        expect(component.getByText("23913")).toBeDefined();
        expect(component.getByTestId("minus-icon")).toBeDefined();
        expect(component.getByTestId("chevron-icon")).toBeDefined();
        const goDetail = component.getByTestId("movement-item");
        fireEvent.press(goDetail);
        expect(navigation.navigate).toHaveBeenCalledWith("Detail", {
            productItem,
        });
        expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });
});