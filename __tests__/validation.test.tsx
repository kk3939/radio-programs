import {
  returnUserNameFromProps,
  returnUserNameFromState,
  returnPhotoUrl,
} from "../src/functions/validation";

describe("validation functions", () => {
  it("null check", () => {
    expect(returnUserNameFromProps(null)).toBe("This user's name isn't setup.");
    expect(returnUserNameFromState(null)).toBe("This user's name isn't setup.");
    expect(returnPhotoUrl(null)).toBe(undefined);
  });
  it("return argument", () => {
    const testArg: string = "test Argument";
    expect(returnUserNameFromProps(testArg)).toBe("test Argument");
    expect(returnUserNameFromState(testArg)).toBe("test Argument");
    expect(returnPhotoUrl(testArg)).toBe("test Argument");
  });
});
