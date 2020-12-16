import React, { FC } from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import { IEvent } from "../../api/models/Event";
import EventListAttendee from "./EventListAttendee";

interface IProp {
  _event: IEvent;
}
const EventListItem: FC<IProp> = ({ _event }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={_event.hostedBy.photoURL} circular size="tiny" />
            <Item.Content>
              <Item.Header>{_event.title}</Item.Header>
              <Item.Description>
                hostedBy: {_event.hostedBy.displayName}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {_event.date.toDateString()}
          <Icon name="marker" /> {_event.venue.address}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal={true}>
          {_event.attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{_event.description}</span>
        <Button color="teal" content="View" floated="right" />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
