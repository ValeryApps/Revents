import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrease, increase } from "./testReducer";
import { openModal } from "../common/modals/modalReducer";
// import TestPlaceInput from "./TestPlaceInput";
// import TestMap from "./TestMap";

const Sandbox = () => {
  const data = useSelector((state) => state.test.data);
  const [target, setTarget] = useState(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.async);
  // const defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33,
  //   },
  //   zoom: 11,
  // };
  //const [location, setLocation] = useState(defaultProps);
  // const handleSetLocation = (repere) => {
  //   setLocation({
  //     ...location,
  //     center: { lat: repere.lat, lng: repere.lng },
  //   });
  //};
  return (
    <div>
      <h1>Let's test Redux here</h1>
      <h2>
        The data is: <i style={{ color: "red" }}> {data}</i>
      </h2>
      <Button
        name='increment'
        loading={loading && target === "increment"}
        content='increase'
        primary
        onClick={(e) => {
          dispatch(increase(5));
          setTarget(e.target.name);
        }}
      />
      <Button
        name='decrement'
        loading={loading && target === "decrement"}
        content='decrease'
        color='red'
        onClick={(e) => {
          dispatch(decrease(3));
          setTarget(e.target.name);
        }}
      />
      <Button
        content='Open Modal'
        color='teal'
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
      />
      {/* <div>
        <TestPlaceInput setLocation={handleSetLocation} />
      </div>
      <TestMap location={location} /> */}
    </div>
  );
};

export default Sandbox;
