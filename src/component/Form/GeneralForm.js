import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./GeneralForm.css";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../store/dataThunk";

export const GeneralForm = ({ isOpen, toggle, mode, editedProduct }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    current_price: "",
    old_price: "",
    percentage_price: "",
    image: "",
    categories: "",
    brand:"",
  });

  useEffect(() => {
    if (mode === "edit product" && editedProduct) {
      setFormData({
        title: editedProduct.title,
        current_price: editedProduct.current_price.toString(),
        old_price: editedProduct.old_price.toString(),
        percentage_price: editedProduct.percentage_price.toString(),
        image: editedProduct.image,
        categories: editedProduct.categories,
        brand:editedProduct.brand,
      });
    } else {
      resetFormData();
    }
  }, [mode, editedProduct]);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      const selectedImage = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          image: reader.result, // This should be a data URL (Base64)
        });
        setImagePreview(reader.result); // Set the image preview
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAddProduct = () => {
    if (mode === "edit product" && editedProduct) {
      // Dispatch action to update the product using editedProduct.id
      dispatch(updateProduct(editedProduct.id, formData));
      resetFormData();
    } else {
      dispatch(addProduct(formData));
    }
    resetFormData();
    toggle();
  };

  const resetFormData = () => {
    setFormData({
      title: "",
      current_price: "",
      old_price: "",
      percentage_price: "",
      image: "",
      categories: "",
      brand:"",
    });
    setImagePreview(null);
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle} className="modal-title">
          {mode}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail" className="formin-title">
                Tên sản phẩm
              </Label>
              <Input
                id="exampleEmail"
                name="title"
                type="text"
                className="form-input"
                value={formData.title}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="formin-title">
                Giá khuyến mãi
              </Label>
              <Input
                id="examplePassword"
                name="current_price"
                type="number"
                className="form-input"
                value={formData.current_price}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="formin-title">
                Giá cũ
              </Label>
              <Input
                id="examplePassword"
                name="old_price"
                type="number"
                className="form-input"
                value={formData.old_price}
                onChange={handleInputChange}
              />
            </FormGroup>
           
            <FormGroup>
              <Label for="examplePassword" className="formin-title">
                Phần trăm giảm
              </Label>
              <Input
                id="examplePassword"
                name="percentage_price"
                type="number"
                className="form-input"
                value={formData.percentage_price}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect" className="formin-title">
                Danh mục
              </Label>
              <Input
                id="exampleSelect"
                name="categories"
                type="select"
                value={formData.categories}
                onChange={handleInputChange}
                className="form-input"
              >
                <option>đồng hồ nam</option>
                <option>đồng hồ nữ</option>
                <option>đồng hồ đôi</option>
                <option>đồng hồ trang trí</option>
                <option>phụ kiện đồng hồ</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect" className="formin-title">
                Thương hiệu
              </Label>
              <Input
                id="exampleSelect"
                name="brand"
                type="select"
                value={formData.brand}
                onChange={handleInputChange}
                className="form-input"
              >
                <option>đồng hồ lobinni</option>
                <option>đồng hồ kassaw</option>
                <option>đồng hồ teintop</option>
                <option>đồng hồ border</option>
                <option>đồng hồ lisheng</option>
                <option>đồng hồ lixing</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile" className="formin-title">
                Image
              </Label>
              <Input
                id="exampleFile"
                name="image"
                type="file"
                className="form-input"
                onChange={handleInputChange}
              />
              {imagePreview && (
                <div>
                  <div className="preview-title">Ảnh đã chọn:</div>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="image-preview"
                  />
                </div>
              )}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="modal-add"
            onClick={handleAddProduct}
          >
            {mode === "edit product" ? "Edit" : "Add"}
          </Button>{" "}
          <Button color="secondary" onClick={toggle} className="modal-cancle">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
