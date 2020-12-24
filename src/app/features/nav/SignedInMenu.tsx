import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import { signOut_user } from "../auth/authAction";

const SignedInMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.auth);
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing='top left' text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/create_event'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My Profile' icon='user' />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOut_user());
              history.push("/");
            }}
            text='sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
