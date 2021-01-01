import React from "react";
//import { Calendar } from "react-widgets";
import { Header, Menu } from "semantic-ui-react";

const EventFilters = () => {
  return (
    <>
      <Menu vertical size='large' style={{ width: "100%" }}>
        <Header icon='filter' content='Filters' attached color='teal' />
        <Menu.Item content='All Events' />
        <Menu.Item content="I'am going" />
        <Menu.Item content="I'am hosting" />
      </Menu>
      <Header icon='calendar' attached color='teal' content='Select Date' />
      {/* <Calendar /> */}
    </>
  );
};

export default EventFilters;
