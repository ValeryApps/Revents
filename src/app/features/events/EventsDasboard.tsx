import React, { FC, useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import { sampleData } from "../../api/sampleData";
import EventForm from "./EventForm";
import EventList from "./EventList";
interface IProp {
  formOpen: boolean;
  setFormOpen(formOpen: boolean): void;
}
const EventsDasboard: FC<IProp> = ({ formOpen, setFormOpen }) => {
  const [events, setEvents] = useState(sampleData);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <Header>Left Colum</Header>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header>Right Colum</Header>
          {formOpen && <EventForm setFormOpen={setFormOpen} />}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EventsDasboard;
