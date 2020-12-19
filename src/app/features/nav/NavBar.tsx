import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

interface IProp {
  //setFormOpen(formOpen: boolean): void;
}
const NavBar: FC<IProp> = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink } to="/" exact >
            <img src="/assets/logo.png" alt="logo" style={{ marginRight: 5 }} />
            Re-vents
          </Menu.Item>
          <Menu.Item name="events" as={NavLink} to="/events"/>
         {authenticated && <Menu.Item as={NavLink} to="/create_event">
            <Button
              content="Create Event"
              positive
             // onClick={() => setAuthenticated(true)}
            />
          </Menu.Item>}
          <Menu.Menu position="right">
            {authenticated ? <SignedInMenu setAuthenticated={setAuthenticated}/>
          : 
          <SignedOutMenu setAuthenticated={setAuthenticated}/>
          }
          
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
