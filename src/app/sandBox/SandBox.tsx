import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrease, increase } from "./testReducer";
//import { openModal } from "../../app/modals/ModalReducer";
//import { decrease, increase } from "./testReducer";

const Sandbox = () => {
  const data = useSelector((state:any) => state.test.data);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Let's test Redux here</h1>
      <h2>
        The data is: <i style={{ color: "red" }}> {data}</i>
      </h2>
      <Button
        content="increase"
        primary
        onClick={() => dispatch(increase(5))}
      />
      <Button
        content="decrease"
        color="red"
        onClick={() => dispatch(decrease(3))}
      />
      <Button
        content="Open Modal"
        // color="teal"
        // onClick={() =>
        //   dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        // }
      />
    </div>
  );
};

export default Sandbox;