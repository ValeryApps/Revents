import React, { FC } from 'react'
import { Item, Segment } from 'semantic-ui-react'
import { IEvent } from '../../../api/models/Event'
interface IProp{
    event:IEvent
}
const EventDetailSideBar:FC<IProp> = ({event}) => {
    return (
       <>
      <Segment
        textAlign="center"
        color="teal"
        inverted
        secondary
        attached="top"
        style={{ border: "none" }}
      >
        {event.attendees.length}{" "}
        {event.attendees.length <= 1 ? "person" : "people"} going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {event.attendees.map((attendee) => (
            <Item key={attendee.id} style={{ position: "relative" }}>
              <Item.Image
                size="tiny"
                src={attendee.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <span>{attendee.displayName}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
    )
}

export default EventDetailSideBar
