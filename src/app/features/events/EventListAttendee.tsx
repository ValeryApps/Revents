import React, { FC } from "react";
import { Image, List } from "semantic-ui-react";
import { IUser } from "../../api/models/user";

interface IProp {
  attendee: IUser;
}

const EventListAttendee: FC<IProp> = ({ attendee }) => {
  return (
    <List.Item>
      <Image src={attendee.photoURL} circular size="mini" />
    </List.Item>
  );
};

export default EventListAttendee;
