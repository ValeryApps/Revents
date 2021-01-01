import { IUser } from "./user";

export interface IEvent {
  id: any;
  title: string;
  date: Date;
  category: string;
  description: string;
  city: {
    address: string;
    latLng: {
      lat: number;
      lng: number;
    };
  };
  venue: {
    address: string;
    latLng: {
      lat: number;
      lng: number;
    };
  };
  hostedBy: IUser;
  attendees: IUser[];
}
