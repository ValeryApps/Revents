import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { openModal } from "../../common/modals/modalReducer";

interface IProp {
  setAuthenticated: (bool: boolean) => void;
}
const SignedOutMenu: FC<IProp> = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Menu.Item>
        <Button
          basic
          inverted
          content='Login'
          onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
        />
        <Button basic inverted content='Register' style={{ marginLeft: 2 }} />
      </Menu.Item>
    </div>
  );
};

export default SignedOutMenu;
