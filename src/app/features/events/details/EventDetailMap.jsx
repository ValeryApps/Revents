import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon, Segment } from "semantic-ui-react";

const Marker = () => {
  return <Icon size='big' color='red' />;
};

const EventDetailMap = ({ latLng }) => {
  const zoom = 14;
  return (
    <Segment attached='bottom' style={{ margin: 0 }}>
      <div style={{ height: 300, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD_nNf7xSfcBG4HtAap-fwD0JZp5j92mpw" }}
          center={latLng}
          zoom={zoom}>
          <Marker lat={latLng.lat} lng={latLng.lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailMap;
