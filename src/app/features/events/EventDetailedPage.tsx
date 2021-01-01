import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { IEvent } from "../../api/models/Event";
import { listenToEventFromFirestore } from "../../firestore/FirestoreServices";
import useFirestireDoc from "../../hooks/useFirestoreDoc";
import LoadingComponent from "../LoadingComponent";
import EventDetailedChat from "./details/EventDetailedChat";
import EventDetailedHeader from "./details/EventDetailedHeader";
import EventDetailedInfo from "./details/EventDetailedInfo";
import EventDetailSideBar from "./details/EventDetailSideBar";
import { listenToEvent } from "./eventAction";

interface IProp {
  match: any;
}
const EventDetailedPage: FC<IProp> = ({ match }) => {
  const event: IEvent = useSelector((state: any) =>
    state.event.events.find((x) => x.id === match.params.id)
  );
  const dispatch = useDispatch();
  useFirestireDoc({
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvent([event])),
    deps: [match.params.id, dispatch],
  });
  const { loading, error } = useSelector((state: any) => state.async);

  if (loading || (!event && !error))
    return <LoadingComponent content='Loading event...' />;
  if (error) return <Redirect to='/error' />;
  return (
    <>
      {event && (
        <Grid>
          <Grid.Column width={10}>
            <EventDetailedHeader event={event} />
            <EventDetailedInfo event={event} />
            <EventDetailedChat />
          </Grid.Column>
          <Grid.Column width={6}>
            <EventDetailSideBar event={event} />
          </Grid.Column>
        </Grid>
      )}
    </>
  );
};

export default EventDetailedPage;
