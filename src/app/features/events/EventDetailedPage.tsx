import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import { IEvent } from "../../api/models/Event";
import EventDetailedChat from "./details/EventDetailedChat";
import EventDetailedHeader from "./details/EventDetailedHeader";
import EventDetailedInfo from "./details/EventDetailedInfo";
import EventDetailSideBar from "./details/EventDetailSideBar";

interface IProp {
  match: any;
}
const EventDetailedPage: FC<IProp> = ({ match }) => {
  const event: IEvent = useSelector((state: any) =>
    state.event.events.find((x) => x.id === match.params.id)
  );

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
