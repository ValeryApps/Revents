import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import { categoryData } from "../../api/categoryOptions";
import CustomInputField from "../../common/form/CustomInputField";
import CustomSelectInput from "../../common/form/CustomSelectInput";
import { CustomTextArea } from "../../common/form/CustomTextArea";
import { createEvent, updateEvent } from "./eventAction";

// interface IProp {
//   match: any;
//   history: any;
// }
const EventForm = ({ match, history }) => {
  const eventSelected = useSelector((state) =>
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

  const validateSchema = Yup.object({
    title: Yup.string().required(),
    category: Yup.string().required(),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  const handleFormSubmit = (values) => {
    eventSelected
      ? dispatch(updateEvent({ ...eventSelected, ...values }))
      : dispatch(createEvent(values));
    history.push("/events");
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
      <Formik
        initialValues={initialEventData}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}>
        {({ isSubmitting, dirty, isValid }) => (
          <Form translate='' className='ui form'>
            <Header sub content=' Event Details' color='teal' />
            <CustomInputField name='title' placeholder='title' />
            <CustomSelectInput
              name='category'
              placeholder='category'
              options={categoryData}
            />
            <CustomTextArea
              name='description'
              placeholder='description'
              //row={5}
            />
            <Header sub content=' Event Location' color='teal' />
            <CustomInputField name='city' placeholder='city' />
            <CustomInputField name='venue' placeholder='venue' />
            <CustomInputField name='date' placeholder='date' type='date' />
            <Button
              loading={isSubmitting}
              disabled={isSubmitting || !dirty || !isValid}
              type='submit'
              content='Submit'
              primary
              floated='right'
            />
            <Button
              disabled={isSubmitting}
              type='button'
              content='Cancel'
              floated='right'
              as={Link}
              to='/events'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
