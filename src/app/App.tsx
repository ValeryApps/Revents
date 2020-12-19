import React from "react";
import { Route } from "react-router-dom";
//import "./App.css";
import { Container } from "semantic-ui-react";
// import { IEvent } from "./api/models/Event";
import EventDetailedPage from "./features/events/EventDetailedPage";
import EventForm from "./features/events/EventForm";
import EventsDasboard from "./features/events/EventsDasboard";
import HomePage from "./features/home/HomePage";
import NavBar from "./features/nav/NavBar";

function App() {
 // const [formOpen, setFormOpen] = useState(false);
  //const [eventSelected, setEventSelected] = useState<IEvent|null>(null)

  // const handleOpenCreateForm=(event:IEvent)=>{
  //   setEventSelected(event);
    
  //   setFormOpen(true)
  // }

  // const handleOpenForm = ()=>{
  //   setFormOpen(true);
  //   setEventSelected(null)
  // }

  return (
    <>
       <Route exact path='/' component={HomePage}/>
       <Route path={"/(.+)"} render={()=>(
         <>
         <NavBar  />
         <Container style={{ marginTop: "4em" }}>
          <Route exact path='/events' component={EventsDasboard}/>
          <Route path='/events/:id' component={EventDetailedPage}/>
          <Route path='/create_event' component={EventForm}/>
         </Container>
         </>
       )}/>
      
    </>
  );
}

export default App;
