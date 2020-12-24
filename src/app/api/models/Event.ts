import { IUser } from "./user";

export interface IEvent {
  id: any;
  title: string;
  date: Date;
  category: string;
  description: string;
  city: string;
  venue: string;
  hostedBy: IUser;
  attendees: IUser[];
}
