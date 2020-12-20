import React from "react";
import { useSelector } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import EventList from "./EventList";

const EventsDasboard = () => {
  const { events } = useSelector((state: any) => state.event);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <Header>Left Colum</Header>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h1>Side bar here</h1>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EventsDasboard;
