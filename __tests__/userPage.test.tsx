/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from "../tools/test-util";
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
  it("editable icons check", () => {
    render(<EditIcons userProps={testUser} />);
    fireEvent.click(screen.getByRole("button"));
  });
});
