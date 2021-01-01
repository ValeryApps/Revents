import React, { FC, useState } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import { format } from "date-fns";
import { IEvent } from "../../../api/models/Event";
import EventDetailMap from "./EventDetailMap";

interface IProp {
  event: IEvent;
}
const EventDetailedInfo: FC<IProp> = ({ event }) => {
  const [showMap, setShowMap] = useState(false);
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='calendar' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(event.date, "MMMM dd, yyyy hh:mm ")}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='marker' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue.address}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              color='teal'
              size='tiny'
              content='Show Map'
              onClick={() => setShowMap(!showMap)}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {showMap && <EventDetailMap latLng={event.venue.latLng} />}
    </Segment.Group>
  );
};

export default EventDetailedInfo;
