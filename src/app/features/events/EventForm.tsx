import cuid from "cuid";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { IEvent } from "../../api/models/Event";
import { createEvent, updateEvent } from "./eventAction";

interface IProp {
  match: any;
  history: any;
}
const EventForm: FC<IProp> = ({ match, history }) => {
  const eventSelected: IEvent = useSelector((state: any) =>
    state.event.events.find((x) => x.id === match.params.id)
  );
  const dispatch = useDispatch();
  const initialEventData = eventSelected
    ? eventSelected
    : {
        id: cuid(),
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
        hostedBy: {
          id: cuid(),
          displayName: "Valery",
          photoURL: "assets/user.png",
        },
        attendees: [],
      };

  const [_event$, _setEvent] = useState<IEvent>(initialEventData);

  const handleFormSubmit = () => {
    eventSelected
      ? dispatch(updateEvent({ ...eventSelected, ..._event$ }))
      : dispatch(createEvent(_event$));
    history.push("/events");
  };
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    _setEvent({ ..._event$, [name]: value });
  };
  return (
    <Segment clearing>
      <Header
        content={
          eventSelected
            ? `You are updating: "${eventSelected.title}"`
            : "Create a new Event"
        }
      />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            name='title'
            value={_event$.title}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={_event$.category}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={_event$.description}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={_event$.city}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={_event$.venue}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            // value={_event$.date.toDateString()}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Button type='submit' content='Submit' primary floated='right' />
        <Button
          type='button'
          content='Cancel'
          floated='right'
          as={Link}
          to='/events'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
