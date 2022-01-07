/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from "@testing-library/react";
import DescriptionText from "../src/components/indexPage/DescriptionText";
import PushToSignInButton from "../src/components/indexPage/PushToSignInButton";
import ServiceTop from "../src/components/indexPage/ServiceTop";

describe("component in index", () => {
  it("Is my contact displayed?", () => {
    render(<DescriptionText />);
    screen.getByText(
      "If you have any questions and requests, please mail this app mantainer(kyo51310@gmail.com)."
    );
  });
  it("Are 'Share your radios.' is displayed?", () => {
    render(<ServiceTop />);
    screen.getByText("Share your radios.");
  });
  it("Is button able to be pushed?", () => {
    const onClick = jest.fn();
    render(<PushToSignInButton onclick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
