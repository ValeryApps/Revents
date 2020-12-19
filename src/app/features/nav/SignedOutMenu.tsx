import React, { FC } from 'react'
import { Button, Menu } from 'semantic-ui-react'

interface IProp{
    setAuthenticated:(bool:boolean)=>void;
}
const SignedOutMenu:FC<IProp> = ({setAuthenticated}) => {
    return (
        <div>
            <Menu.Item>
              <Button basic inverted content="Login"  onClick={()=>setAuthenticated(true)}/>
              <Button
             
                basic
                inverted
                content="Register"
                style={{ marginLeft: 2 }}
              />
            </Menu.Item> 
        </div>
    )
}

export default SignedOutMenu
