import React, { FC } from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface IProp {
  setFormOpen(formOpen: boolean): void;
}
const NavBar: FC<IProp> = ({ setFormOpen }) => {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home">
            <img src="/assets/logo.png" alt="logo" style={{ marginRight: 5 }} />
            Re-vents
          </Menu.Item>
          <Menu.Item name="events" />
          <Menu.Item>
            <Button
              content="Create Event"
              positive
              onClick={() => setFormOpen(true)}
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button basic inverted content="Login" />
              <Button
                basic
                inverted
                content="Register"
                style={{ marginLeft: 2 }}
              />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
