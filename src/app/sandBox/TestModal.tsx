import React from "react";
import ModalWrapper from "../common/modals/ModalWrapper";

const TestModal = ({ data }) => {
  return (
    <ModalWrapper size='mini' header='Test Modal'>
      <h1>Let me try you {data}</h1>
    </ModalWrapper>
  );
};

export default TestModal;
