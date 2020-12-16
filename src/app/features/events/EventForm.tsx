import React, { FC } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

interface IProp {
  setFormOpen(formOpen: boolean): void;
}
const EventForm: FC<IProp> = ({ setFormOpen }) => {
  return (
    <Segment clearing>
      <Header content="Form" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
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
