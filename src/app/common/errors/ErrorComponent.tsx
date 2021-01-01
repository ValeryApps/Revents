import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";

const ErrorComponent = () => {
  const { error } = useSelector((state: any) => state.async);
  return (
    <>
      <Segment placeholder>
        <Header
          textAlign='center'
          content={
            (error && error!.message) || "Oops! Could not find document!"
          }
          color='red'
          size='huge'
        />
        <Button
          as={Link}
          to='/events'
          content='Back to events'
          color='blue'
          style={{ marginTop: 20 }}
        />
      </Segment>
    </>
  );
};

export default ErrorComponent;
