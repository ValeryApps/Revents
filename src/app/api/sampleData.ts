import { IEvent } from "./models/Event";
export const sampleData: IEvent[] = [
  {
    id: "1",
    title: "Trip to Empire State building",
    date: new Date("2018/03/21"),
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: {
      address: "NY, USA",
      latLng: {
        lat: 40.7484405,
        lng: -73.98566440000002,
      },
    },
    venue: {
      address: "Empire State Building, 5th Avenue, New York, NY, USA",
      latLng: {
        lat: 40.7484405,
        lng: -73.98566440000002,
      },
    },

    hostedBy: {
      id: "a",
      displayName: "Bob",
      photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    attendees: [
      {
        id: "a",
        displayName: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        displayName: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "c",
        displayName: "Henry",
        photoURL: "https://randomuser.me/api/portraits/men/23.jpg",
      },
      {
        id: "d",
        displayName: "Jack",
        photoURL: "https://randomuser.me/api/portraits/men/21.jpg",
      },
      {
        id: "e",
        displayName: "Jane",
        photoURL: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: new Date("2018/03/18"),
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: {
      address: "London, UK",
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },
    venue: {
      address: "Punch & Judy, Henrietta Street, London, UK",
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },

    hostedBy: {
      id: "b",
      displayName: "Tom",
      photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    attendees: [
      {
        id: "a",
        displayName: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        displayName: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "c",
        displayName: "Henry",
        photoURL: "https://randomuser.me/api/portraits/men/23.jpg",
      },
      {
        id: "d",
        displayName: "Jack",
        photoURL: "https://randomuser.me/api/portraits/men/21.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Trip to Punch and Judy Pub",
    date: new Date("2018/03/18"),
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: {
      address: "London, UK",
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },
    venue: {
      address: "Punch & Judy, Henrietta Street, London, UK",
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },

    hostedBy: {
      id: "b",
      displayName: "Tom",
      photoURL: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    attendees: [
      {
        id: "a",
        displayName: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        displayName: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "c",
        displayName: "Henry",
        photoURL: "https://randomuser.me/api/portraits/men/23.jpg",
      },
      {
        id: "d",
        displayName: "Jack",
        photoURL: "https://randomuser.me/api/portraits/men/21.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Trip to Punch and Judy Pub",
    date: new Date("2018/03/18 9:34 pm"),
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: {
      address: "London, UK",
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },
    venue: {
      address: "Punch & Judy, Henrietta Street, London, UK",
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },

    hostedBy: {
      id: "b",
      displayName: "Tom",
      photoURL: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    attendees: [
      {
        id: "a",
        displayName: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        displayName: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "c",
        displayName: "Henry",
        photoURL: "https://randomuser.me/api/portraits/men/23.jpg",
      },
      {
        id: "d",
        displayName: "Jack",
        photoURL: "https://randomuser.me/api/portraits/men/21.jpg",
      },
    ],
  },
];
