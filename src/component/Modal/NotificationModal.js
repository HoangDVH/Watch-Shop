import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./NotificationModal.css";
import { ImNotification } from "react-icons/im";
export const Form = ({ isOpen, toggle, onDelete, selectedItemName }) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>
          <div className="form-title">
            <ImNotification className="form-icon" />
          </div>
        </ModalHeader>
        <ModalBody className="form-content">
          Bạn có chắc chắc muốn xóa sản phẩm {selectedItemName}?
        </ModalBody>
        <ModalFooter className="form-footer">
          <Button className="delete-form-btn" color="primary" onClick={() => onDelete()}>
            Xóa
          </Button>{" "}
          <Button className="cancle-form-btn" color="danger" onClick={toggle}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
