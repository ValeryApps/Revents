import React, { FC } from "react";
import { IEvent } from "../../api/models/Event";
import EventListItem from "./EventListItem";

interface IProp {
  events: IEvent[];
  selectEvent:(event:IEvent)=>void;
  deleteEvent:(id:string)=>void;
}
const EventList: FC<IProp> = ({ events, selectEvent, deleteEvent }) => {
  return (
    <div>
      {events.map((_event) => (
        <EventListItem _event={_event} key={_event.id}  selectEvent = {selectEvent} deleteEvent = {deleteEvent} />
      ))}
    </div>
  );
};

export default EventList;
