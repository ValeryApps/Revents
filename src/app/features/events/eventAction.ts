import { fetchSampleData } from "../../api/mockApi";
import { IEvent } from "../../api/models/Event";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../async/asyncReducer";

import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from "./eventConstant";

export const fetchEvents = () => {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      var events = await fetchSampleData();

      dispatch({ type: FETCH_EVENTS, payload: events });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};
export const listenToEvent = (events: IEvent[]) => {
  return {
    type: FETCH_EVENTS,
    payload: events,
  };
};

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
