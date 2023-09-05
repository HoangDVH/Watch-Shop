import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import "./SortBox.css";
export const SortBox = ({ filters, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const sortOptions = {
    selectedMovement: "Kiểu máy",
    selectedWireType: "Kiểu dây",
    selectedBrand: "Thương hiệu",
    selectedSex: "Giới tính",
    selectedSort: "Sắp xếp sản phẩm",
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);

    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [name]: value,
    }));
  };

  const clearFilter = (filterName) => {
    setSelectedFilters((prevSelectedFilters) => {
      const updatedFilters = { ...prevSelectedFilters };
      delete updatedFilters[filterName];
      return updatedFilters;
    });
    // Gọi hàm onFilterChange để cập nhật lại trạng thái sản phẩm trong Cart
    onFilterChange(filterName, "");
  };
  
  return (
    <div className="container">
      <div className="sort">
        {" "}
        <div className="sort-area">
          <FormGroup>
            <Input
              id="exampleSelect"
              name="selectedMovement"
              type="select"
              value={filters.selectedMovement || ""}
              onChange={handleFilterChange}
            >
              <option selected className="select-name">
                Kiểu máy
              </option>
              <option>Đồng hồ điện tử</option>
              <option>Đồng hồ Automatic</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              id="exampleSelect"
              name="selectedWireType"
              type="select"
              value={filters.selectedWireType}
              onChange={handleFilterChange}
            >
              <option selected>Kiểu dây</option>
              <option>Dây da cao cấp</option>
              <option>Thép không gỉ 316L</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              id="exampleSelect"
              name="selectedBrand"
              type="select"
              value={filters.selectedBrand}
              onChange={handleFilterChange}
            >
              <option disabled selected>
                Thương hiệu
              </option>
              <option>lobinni</option>
              <option>kassaw</option>
              <option>teintop</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              id="exampleSelect"
              name="selectedSex"
              type="select"
              value={filters.selectedSex}
              onChange={handleFilterChange}
            >
              <option selected>Giới tính</option>
              <option>Nam</option>
              <option>Nữ</option>
              <option>Nam và Nữ</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              id="exampleSelect"
              name="selectedSort"
              type="select"
              value={filters.selectedSort}
              onChange={handleFilterChange}
            >
              <option selected>Sắp xếp sản phẩm</option>
              <option value="asc">Giá tăng dần</option>
              <option value="desc">Giá giảm dần</option>
            </Input>
          </FormGroup>
        </div>
        {Object.keys(selectedFilters).length > 0 && (
          <div className="sort-result">
            {Object.keys(selectedFilters).map((name) => (
              <div key={name} className="sort-item">
                <p className="sort-title">
                  {sortOptions[name]}:{" "}
                  <span className="sort-name">{selectedFilters[name]}</span>
                </p>
                <button
                  className="sort-btn"
                  onClick={() => clearFilter(name)}
                >
                  [x]
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
