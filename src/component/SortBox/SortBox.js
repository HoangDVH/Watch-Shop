import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import "./SortBox.css";
export const SortBox = () => {
  return (
    <div className="container">
      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          <option  disabled selected className="select-name">Kiểu máy</option>
          <option>Máy điện tử (pin)</option>
          <option>Máy cơ (Automatic) </option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          <option  disabled selected>Kiểu dây</option>
          <option>Dây kim loại</option>
          <option>Dây da</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          <option  disabled selected>Khoảng giá</option>
          <option>Giá dưới 1 triệu</option>
          <option>Giá từ 1 đến 3 triệu</option>
          <option>Giá từ 3 đến 6triệu</option>
          <option>Giá từ 6 đến 10 triệu</option>
          <option>Giá từ 10 đến 20 triệu</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          <option  disabled selected>Giới tính</option>
          <option>Nam</option>
          <option>Nữ</option>
          <option>Đôi</option>
         
        </Input>
      </FormGroup>

      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          <option disabled selected>Sắp xếp sản phẩm</option>
          <option>Mới nhất</option>
          <option>Giá tăng dần</option>
          <option>Giá giảm dần</option>
         
        </Input>
      </FormGroup>
    </div>
  );
};
