import React, { FC, useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import { IEvent } from "../../api/models/Event";
import { sampleData } from "../../api/sampleData";
import EventForm from "./EventForm";
import EventList from "./EventList";
interface IProp {
  formOpen: boolean;
  setFormOpen(formOpen: boolean): void;
  selectEvent(event:IEvent): void;
  eventSelected:IEvent|null
}
const EventsDasboard: FC<IProp> = ({ formOpen, setFormOpen, selectEvent, eventSelected }) => {
  const [events, setEvents] = useState(sampleData);
  const [_event] = useState<any>(null);

  const handleCreateEvent = ($event:IEvent)=>{
          setEvents([...events, $event]);
  }
  const handleUpdateEvent=(updatedEvent:IEvent)=>{
    console.log(updatedEvent);
    
   setEvents(events.map(evt=>evt.id === updatedEvent.id ? updatedEvent: evt))
  }
  const handleDeleteEvent = (eventId:string)=>{
    setEvents(events.filter(evt=>evt.id !== eventId));
  } 

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <Header>Left Colum</Header>
          <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header>Right Colum</Header>
          {formOpen && <EventForm setFormOpen={setFormOpen} _event={_event} createEvent = {handleCreateEvent} eventSelected={eventSelected} key={eventSelected ? eventSelected.id: null} updateEvent={handleUpdateEvent}/>}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EventsDasboard;
