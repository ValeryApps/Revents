import React, { FC } from "react";
import { IEvent } from "../../api/models/Event";
import EventListItem from "./EventListItem";

interface IProp {
  events: IEvent[];
}
const EventList: FC<IProp> = ({ events }) => {
  return (
    <div>
      {events.map((_event) => (
        <EventListItem _event={_event} key={_event.id} />
      ))}
    </div>
  );
};

export default EventList;
