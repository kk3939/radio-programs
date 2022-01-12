import React from "react";
import { render, screen, fireEvent } from "../tools/test-util";
import {
  CloseIconButton,
  EditIconButton,
  LogoutIconButton,
  SaveIconButton,
} from "../src/components/userIdPage/IconButton";

describe("component in UserId", () => {
  it("close iconButtons check", () => {
    const onClick = jest.fn();
    render(<CloseIconButton onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("edit iconButtons check", () => {
    const onClick = jest.fn();
    render(<EditIconButton onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("logout iconButtons check", () => {
    const onClick = jest.fn();
    render(<LogoutIconButton onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("logout iconButtons check", () => {
    const onClick = jest.fn();
    render(<SaveIconButton onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
