import cuid from "cuid";
import React, { FC, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { IEvent } from "../../api/models/Event";


interface IProp {
  setFormOpen: (formOpen: boolean) => void;
  createEvent: (event: IEvent) => void;
  updateEvent: (event: IEvent) => void;
  _event: IEvent;
  eventSelected :IEvent|null
}
const EventForm: FC<IProp> = ({ setFormOpen, createEvent, eventSelected, updateEvent }) => {
  const initialEventData = eventSelected ?? {
        id: cuid(),
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: '',
        hostedBy: { id: cuid(), displayName: "Valery", photoURL: "assets/user.png" },
        attendees: [],
      };

  const [_event$, _setEvent] = useState<IEvent>(initialEventData);

  const handleFormSubmit = () => {
    eventSelected ? updateEvent({...eventSelected, ..._event$}):
    createEvent(_event$);
    setFormOpen(false);
  };
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    _setEvent({ ..._event$, [name]: value });
  };
  return (
    <Segment clearing>
      <Header content={eventSelected ? `You are updating: "${eventSelected.title}"`:"Create a new Event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            name="title"
            value={_event$.title}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={_event$.category}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={_event$.description}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={_event$.city}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={_event$.venue}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            // value={_event$.date.toDateString()}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Field>
        <Button type="submit" content="Submit" primary floated="right" />
        <Button
          type="button"
          content="Cancel"
          floated="right"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
