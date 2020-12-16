import React, { useState } from "react";
//import "./App.css";
import { Container, Header } from "semantic-ui-react";
import EventsDasboard from "./features/events/EventsDasboard";
import NavBar from "./features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container style={{ marginTop: "4em" }}>
        <Header>Re-vents</Header>
        <EventsDasboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
