import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

configure({ adapter: new Adapter() });

global.localStorage = localStorageMock;
