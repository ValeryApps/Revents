import React from 'react'
import { Segment, Header, Form, Button, Comment } from 'semantic-ui-react'

const EventDetailedChat = () => {
    return (
        <>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: "none" }}
      >
        <Header>Chat about this event</Header>
      </Segment>
      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a"> Matt </Comment.Author>
              <Comment.Metadata>
                <p>Today at 5:34PM</p>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a"> Valery </Comment.Author>
              <Comment.Metadata>
                <p>Today at 5:30PM</p>
              </Comment.Metadata>
              <Comment.Text>
                Wow! This Guy is a genius. This is a master piece
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a"> Henry </Comment.Author>
              <Comment.Metadata>
                <p>Today at 4:34PM</p>
              </Comment.Metadata>
              <Comment.Text>
                Have you seen this before. It is amazing. Isn't ?
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src="/assets/user.png" />
                <Comment.Content>
                  <Comment.Author as="a"> Jack </Comment.Author>
                  <Comment.Metadata>
                    <p>Today at 4:34PM</p>
                  </Comment.Metadata>
                  <Comment.Text>
                    Yes it is. I wish I could draw like this dude
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a"> Charles </Comment.Author>
              <Comment.Metadata>
                <p>Today at 3:34PM</p>
              </Comment.Metadata>
              <Comment.Text>
                Yes. He did a good work, but honestly, I don't like this design
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              primary
              labelPosition="left"
              icon="edit"
            />
          </Form>
        </Comment.Group>
      </Segment>
    </>
    )
}

export default EventDetailedChat
