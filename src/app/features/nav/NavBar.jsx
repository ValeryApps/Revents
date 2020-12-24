import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item name='home' as={NavLink} to='/' exact>
            <img src='/assets/logo.png' alt='logo' style={{ marginRight: 5 }} />
            Re-vents
          </Menu.Item>
          <Menu.Item name='events' as={NavLink} to='/events' />
          <Menu.Item name='sandbox' as={NavLink} to='/sandbox' />
          {isAuthenticated && (
            <Menu.Item as={NavLink} to='/create_event'>
              <Button content='Create Event' positive />
            </Menu.Item>
          )}
          <Menu.Menu position='right'>
            {isAuthenticated ? <SignedInMenu /> : <SignedOutMenu />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
