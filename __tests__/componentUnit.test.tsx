/* eslint-disable react/react-in-jsx-scope */
import DescriptionText from "../src/components/indexPage/DescriptionText";
import { fireEvent, render, screen } from "@testing-library/react";
import ServiceTop from "../src/components/indexPage/ServiceTop";
import PushToSignInButton from "../src/components/indexPage/PushToSignInButton";
import SignInFlexButton from "../src/components/signInPage/SignInFlexButton";
import PushToIndexButton from "../src/components/signInPage/PushToIndexButton";
import { useSelector, useDispatch } from "react-redux";
import EditIcons from "../src/components/userIdPage/EditIcons";
import { UserProps } from "../src/types/global";
import UserPage from "../src/pages/user/[id]";

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

describe("component in UserId", () => {
  const testUser: UserProps = {
    name: "hoge",
    photoUrl: "",
    id: "000000",
    radios: [
      {
        index: 0,
        name: "三四郎のオールナイトニッポン0",
      },
      {
        index: 1,
        name: "オードリーのオールナイトニッポン",
      },
    ],
  };

  it("editable icons check", () => {
    render(<EditIcons userProps={testUser} />);
  });
});
