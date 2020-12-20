import { IEvent } from "../../api/models/Event";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstant";

export const createEvent = (event: IEvent) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};

export const updateEvent = (event: IEvent) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};
export const deleteEvent = (eventId: string) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};
