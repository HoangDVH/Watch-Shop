import React, { useEffect, useState } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
import "./Admin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectProducts,
  selectTotalPages,
} from "../../store/dataSlice";
import { deleteProduct, fetchProducts } from "../../store/dataThunk";

import { GeneralForm } from "../Form/GeneralForm";
import { PaginationComponent } from "../Pagination/PaginationComponent";

export const Admin = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false); // New state for edit mode
  const [editedProduct, setEditedProduct] = useState(null);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleDeleteProduct = (productId) => {
    // Call the action to delete the product
    dispatch(deleteProduct(productId));
  };

  const handleEditProduct = (product) => {
    setEditMode(true); // Set edit mode
    setEditedProduct(product);
    toggleModal(); // Open the modal in edit mode
  };
  return (
    <div className="wrapper">
      <div className="dashboard">
        <div className="sidebar">
          <ListGroup>
            <ListGroupItem active>Products</ListGroupItem>
            <ListGroupItem>Post</ListGroupItem>
            <ListGroupItem>User</ListGroupItem>
          </ListGroup>
        </div>
        <div className="table">
          <Button
            className="add-btn"
            color="primary"
            onClick={() => {
              setEditMode(false);
              toggleModal(); // Open the modal when delete button is clicked
            }}
          >
            Thêm sản phẩm
          </Button>
          <Table>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá khuyến mãi</th>
                <th>Giá gốc</th>
                <th>Phần trăm giảm</th>
                <th>Danh mục</th>
                <th>Thương hiệu</th>
                <th>Hình ảnh</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <td className="product-admin-name">{product.title}</td>
                    <td className="product-current_price">
                      {product.current_price.toLocaleString()}đ
                    </td>
                    <td className="product-old_price">
                      {product.old_price.toLocaleString()}đ
                    </td>
                    <td className="product-percentage_price">
                      {product.percentage_price}%
                    </td>
                    <td className="product-categories">{product.categories}</td>
                    <td className="product-brand">{product.brand}</td>
                    <td className="adminproduct-image">
                      <img src={product.image} alt="hi"></img>
                    </td>
                    <td>
                      <Button
                        className="btn-update"
                        color="warning"
                        onClick={() => handleEditProduct(product)}
                      >
                        Sửa
                      </Button>
                    </td>
                    <td className="delete-button">
                      <Button
                        className="btn-delete"
                        color="danger"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Xóa
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <PaginationComponent totalPages={totalPages} />
        </div>
      </div>
      <GeneralForm
        isOpen={modalVisible}
        toggle={toggleModal}
        mode={editMode ? "edit product" : "add product"}
        editedProduct={editedProduct}
      />
    </div>
  );
};
