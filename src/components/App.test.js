import React from "react";
import { shallow } from "enzyme";

// import component
import App from "./App.jsx";

describe("App", () => {
    it("should render the App", () => {
        const tree = shallow(<App />);

        expect(tree).toMatchSnapshot();
    });
});
