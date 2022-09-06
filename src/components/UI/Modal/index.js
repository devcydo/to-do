import React, { Fragment, useContext } from "react";
import { createPortal } from "react-dom";

import { ModalContext } from "../../../context/Modal"

import classes from "./style.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = () => {

  let { modalContent, handleModal, modal } = useContext(ModalContext)

  if(modal){
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={handleModal} />, portalElement)}
      {createPortal(<ModalOverlay>{modalContent}</ModalOverlay>, portalElement)}
    </Fragment>
  );
  }else return null;
};

export default Modal;
