import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Dropdown, Menu, Image } from 'semantic-ui-react'


interface IProp{
    setAuthenticated:(bool:boolean)=>void;
}
const SignedInMenu:FC<IProp> = ({setAuthenticated}) => {
  const history = useHistory();
    const signOut =()=>{
        setAuthenticated(false);
        history.push("/");
    }
    return (
         <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Valery">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create_event"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item onClick={signOut} text="sign out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    )
}

export default SignedInMenu
