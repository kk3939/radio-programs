import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import {
  GrayButton,
  SignInButton,
  WhiteButton,
} from "../src/components/Common/Buttons/NormalButton";
import { Text } from "../src/components/Common/Text/Text";
import {
  AddIconButton,
  CloseIconButton,
  DeleteIconButton,
  EditIconButton,
  LogoutIconButton,
} from "../src/components/Common/Buttons/IconButton";
import Footer from "../src/components/Common/Footer/Footer";
import Input from "../src/components/Common/Input/Input";
import Image from "../src/components/Common/Image/Image";
import HeightSpacer from "../src/components/Common/Layouts/HeightSpacer";

describe("Common Unit Test", () => {
  afterEach(() => cleanup());

  it("Text", () => {
    render(<Text fontSize="2xl" text="test1" />);
    expect(screen.getByText("test1")).toBeInTheDocument();
    render(<Text fontSize="2xl" text="test2" />);
    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  it("Normal Buttons", () => {
    const onClick = jest.fn();
    render(<WhiteButton onClick={onClick} text="test1" />);
    render(<GrayButton onClick={onClick} text="test2" />);
    render(<SignInButton onClick={onClick} text="test3" />);
    expect(screen.getByText("test1")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
    expect(screen.getByText("test3")).toBeInTheDocument();
    fireEvent.click(screen.getByText("test1"));
    fireEvent.click(screen.getByText("test2"));
    fireEvent.click(screen.getByText("test3"));
    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it("Icon Buttons", () => {
    const onClick = jest.fn();
    render(<CloseIconButton onClick={onClick} />);
    render(<EditIconButton onClick={onClick} />);
    render(<LogoutIconButton onClick={onClick} />);
    render(<AddIconButton onClick={onClick} />);
    render(<DeleteIconButton onClick={onClick} />);
    const renderedButtons: HTMLElement[] = screen.getAllByRole("button");
    renderedButtons.forEach((element) => {
      fireEvent.click(element);
    });
    expect(onClick).toHaveBeenCalledTimes(5);
  });

  it("Footer", () => {
    render(<Footer />);
    expect(
      screen.getByText("kyosuke kubo, All rights reserved.")
    ).toBeInTheDocument();
  });

  it("Input", () => {
    const onChange = jest.fn();
    render(<Input placeholder="placeholder" value="" onChange={onChange} />);
    userEvent.type(screen.getByPlaceholderText("placeholder"), "test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("Image", () => {
    render(
      <Image
        borderRadius="25px"
        src="/profile2.png"
        boxSize="400px"
        alt="test"
      />
    );
    const ImageElement: HTMLImageElement = screen.getByAltText("test");
    expect(ImageElement.src).toContain("/profile2.png");
  });

  it("Spacer", () => {
    render(<HeightSpacer spacePixel="100px" />);
    const div = document.getElementsByClassName("spacer-element");
    expect(div[0]).toHaveStyle({ height: "100px" });
  });
});
