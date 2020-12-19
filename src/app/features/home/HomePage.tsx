import React, { FC } from 'react'
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react'
interface IProps{
    history:any
}
const HomePage:FC<IProps> = ({history}) => {
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container >
                <Header as="h1" inverted>
                    <Image src='assets/logo.png' size="massive" style={{marginBottom:12}} />
                    Re-vents
                </Header>
                <Button inverted size="huge" onClick={()=>history.push('events')}>
                 Get Started
                 <Icon name="arrow right"/>
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage
