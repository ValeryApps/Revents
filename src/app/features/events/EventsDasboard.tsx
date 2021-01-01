import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import listenEventsFromFirestore from "../../firestore/FirestoreServices";
import usefirestireCollection from "../../hooks/usefirestireCollection";
import { listenToEvent } from "./eventAction";
import EventFilters from "./EventFilters";
import EventList from "./EventList";
import EventListItemPlaceholder from "./EventListItemPlaceholder";

const EventsDasboard = () => {
  const { events } = useSelector((state: any) => state.event);
  const { loading } = useSelector((state: any) => state.async);
  const dispatch = useDispatch();

  usefirestireCollection({
    query: () => listenEventsFromFirestore(),
    data: (events) => dispatch(listenToEvent(events)),
    deps: [dispatch],
  });

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          {loading && (
            <>
              <EventListItemPlaceholder />
              <EventListItemPlaceholder />
              <EventListItemPlaceholder />
              <EventListItemPlaceholder />
            </>
          )}
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventFilters />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EventsDasboard;
