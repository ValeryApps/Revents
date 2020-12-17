import React, { useState } from "react";
//import "./App.css";
import { Container, Header } from "semantic-ui-react";
import { IEvent } from "./api/models/Event";
import EventsDasboard from "./features/events/EventsDasboard";
import NavBar from "./features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [eventSelected, setEventSelected] = useState<IEvent|null>(null)

  const handleOpenCreateForm=(event:IEvent)=>{
    setEventSelected(event);
    
    setFormOpen(true)
  }

  const handleOpenForm = ()=>{
    setFormOpen(true);
    setEventSelected(null)
  }

  return (
    <>
      <NavBar setFormOpen={handleOpenForm} />
      <Container style={{ marginTop: "4em" }}>
        <Header>Re-vents</Header>
        <EventsDasboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleOpenCreateForm} eventSelected={eventSelected}/>
      </Container>
    </>
  );
}

export default App;
