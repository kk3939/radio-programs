import { addRadio, deleteRadio } from "../src/functions/radioDispatch";
describe("dispatch function", () => {
  const radios = [
    {
      index: 0,
      name: "三四郎のオールナイトニッポン0",
    },
    {
      index: 1,
      name: "オードリーのオールナイトニッポン",
    },
  ];

  const testReducer = {
    payload: {
      index: 0,
    },
    type: "testType",
  };

  it("add function", () => {
    const mockedDispatch = jest.fn();
    addRadio(radios, mockedDispatch, testReducer);
    expect(mockedDispatch).toHaveBeenCalledTimes(1);
  });

  it("validation of add function", () => {
    const mockedDispatch = jest.fn();
    window.alert = jest.fn();
    const lengthTwentyArray = [...Array(20)].map((_, i) => {
      return {
        index: i,
        name: "三四郎のオールナイトニッポン0",
      };
    });
    addRadio(lengthTwentyArray, mockedDispatch, testReducer);
    expect(mockedDispatch).not.toHaveBeenCalled();
  });

  it("delete function", () => {
    const mockedDispatch = jest.fn();
    deleteRadio(radios, mockedDispatch, testReducer);
    expect(mockedDispatch).toHaveBeenCalledTimes(1);
  });

  it("validation of delete function", () => {
    const mockedDispatch = jest.fn();
    window.alert = jest.fn();
    const lengthOneArray = [...Array(1)].map((_, i) => {
      return {
        index: i,
        name: "三四郎のオールナイトニッポン0",
      };
    });
    deleteRadio(lengthOneArray, mockedDispatch, testReducer);
    expect(mockedDispatch).not.toHaveBeenCalled();
  });
});
