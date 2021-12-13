import React from "react";
import { render } from "@testing-library/react" 
import "@testing-library/jest-dom/extend-expect"
import Toggable from "../Toggable";

describe.skip("<Toggable />", () => {
    let component;

    beforeAll(() => {
        component = render(
            <Toggable buttonLabel="show">
                <div className="testDiv">testDivContent</div>
            </Toggable>
        )        
    });
    
    test("renders its children", () => {
        component.getByText("testDivContent")
    })

    test("", () => {
        const el = component.querySelector(".testDiv")

        expect(el).toHaveStyle('display: none')
    })
})