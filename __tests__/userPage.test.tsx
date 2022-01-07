/* eslint-disable react/react-in-jsx-scope */
import { render } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import EditIcons from "../src/components/userIdPage/EditIcons";
import { UserProps } from "../src/types/global";

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
describe("component in UserId", () => {
  // beforeEach(() => {
  //   const useSelectorMock = useSelector as jest.Mock<string>;
  //   const useDispatchMock = useDispatch as jest.Mock;
  // });
  it("editable icons check", () => {
    render(<EditIcons userProps={testUser} />);
  });
});
