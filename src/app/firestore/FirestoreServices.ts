import firebase from "../config/firebase";
const db = firebase.firestore();

export const dataFromSnapshot = (snapshot) => {
  if (!snapshot.exists) {
    return undefined;
  }
  const data = snapshot.data();
  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }
  return {
    ...data,
    id: snapshot.id,
  };
};
const listenEventsFromFirestore = () => {
  return db.collection("events");
};

export const listenToEventFromFirestore = (eventId) => {
  return db.collection("events").doc(eventId);
};

export default listenEventsFromFirestore;
