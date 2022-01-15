import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import {
  GrayButton,
  SignInButton,
  WhiteButton,
} from "../src/components/Common/Buttons/NormalButton";
import { Text } from "../src/components/Common/Text/Text";

describe("Common Unit Test", () => {
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
    fireEvent.click(screen.getByText("test1"));
    fireEvent.click(screen.getByText("test2"));
    fireEvent.click(screen.getByText("test3"));
    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
