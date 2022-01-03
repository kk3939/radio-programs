/* eslint-disable react/react-in-jsx-scope */
import DescriptionText from "../src/components/indexPage/DescriptionText";
import { fireEvent, render, screen } from "@testing-library/react";
import ServiceTop from "../src/components/indexPage/ServiceTop";
import PushToSignInButton from "../src/components/indexPage/PushToSignInButton";

describe("indexPage Test", () => {
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
    fireEvent.click(screen.getByText("Start Radio programs"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
