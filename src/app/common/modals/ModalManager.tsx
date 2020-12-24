import React from "react";
import { useSelector } from "react-redux";
import TestModal from "../../sandBox/TestModal";
import LoginForm from "../../features/auth/LoginForm";

const ModalManager = () => {
  const modalLookUp = { TestModal, LoginForm };
  const currentModal = useSelector((state: any) => state.modals);
  let renderModal;
  if (currentModal) {
    const { modalType, modalProp } = currentModal;
    const ModalComponent = modalLookUp[modalType];
    renderModal = <ModalComponent {...modalProp} />;
  }

  return <span>{renderModal}</span>;
};

export default ModalManager;
