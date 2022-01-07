/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from "@testing-library/react";
import PushToIndexButton from "../src/components/signInPage/PushToIndexButton";
import SignInFlexButton from "../src/components/signInPage/SignInFlexButton";

describe("component in signIn", () => {
  it("Is 'signIn button' able to be pushed", () => {
    const onClick = jest.fn();
    render(<SignInFlexButton onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("Is 'back to index button' able to be pushed", () => {
    const onClick = jest.fn();
    render(<PushToIndexButton onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
