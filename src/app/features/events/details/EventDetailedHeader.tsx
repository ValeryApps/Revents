import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Button, Header, Item, Segment, Image } from 'semantic-ui-react';
import { format } from "date-fns";
import { IEvent } from '../../../api/models/Event';

const eventImageStyle = {
  filter: "brightness(70%)",
};
const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};
interface IProp{
    event:IEvent
}
const EventDetailedHeader:FC<IProp> = ({event}) => {
    return (
       <Segment.Group>
      <Segment basic attached="top" style={{ padding: 0 }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />
        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{format(event.date, "MMMM dd, yyyy hh:mm ")}</p>
                <p>
                  Posted by <strong>{event.hostedBy.displayName}</strong>{" "}
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment attached="bottom">
        <Button content="Cancel my place" />
        <Button color="teal" content="Join this Event" />
        <Button
          color="orange"
          floated="right"
          content="Manage
        Event"
          as={Link}
          to={`/manage/${event.id}`}
        />
      </Segment>
    </Segment.Group>
  );
}

export default EventDetailedHeader
