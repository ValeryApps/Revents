import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import { IEvent } from "../../api/models/Event";
import { deleteEvent } from "./eventAction";
import EventListAttendee from "./EventListAttendee";
import { format } from "date-fns";

interface IProp {
  _event: IEvent;
}
const EventListItem: FC<IProp> = ({ _event }) => {
  const dispatch = useDispatch();
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={_event.hostedBy.photoURL} circular size='tiny' />
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
          <Icon name='clock' /> {format(_event.date, "MMMM d, yyyy HH:mm")}
          <Icon name='marker' /> {_event.venue}
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
        <Button
          onClick={() => dispatch(deleteEvent(_event.id))}
          color='red'
          content='delete'
          floated='right'
        />
        <Button
          as={Link}
          to={`/events/${_event.id}`}
          color='teal'
          content='View'
          floated='right'
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
