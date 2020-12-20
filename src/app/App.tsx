import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDetailedPage from "./features/events/EventDetailedPage";
import EventForm from "./features/events/EventForm";
import EventsDasboard from "./features/events/EventsDasboard";
import HomePage from "./features/home/HomePage";
import NavBar from "./features/nav/NavBar";
import Sandbox from "./sandBox/SandBox";

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "4em" }}>
              <Route exact path='/events' component={EventsDasboard} />
              <Route exact path='/sandbox' component={Sandbox} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/create_event' component={EventForm} />
              <Route path='/manage/:id' component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
