import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import ErrorComponent from "./common/errors/ErrorComponent";
import ModalManager from "./common/modals/ModalManager";
import EventDetailedPage from "./features/events/EventDetailedPage";
import EventForm from "./features/events/EventForm";
import EventsDasboard from "./features/events/EventsDasboard";
import HomePage from "./features/home/HomePage";
import NavBar from "./features/nav/NavBar";
import Sandbox from "./sandBox/SandBox";

function App() {
  return (
    <>
      <ToastContainer position='bottom-right' />
      <ModalManager />
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
              <Route path='/error' component={ErrorComponent} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
