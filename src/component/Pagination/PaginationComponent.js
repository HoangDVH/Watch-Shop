import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/dataSlice";
export const PaginationComponent = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.data.currentPage);

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
  return (
    <div>
      <Pagination className="pagination">
        <PaginationItem>
          <PaginationLink onClick={() => handlePageClick(1)} first />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={prevPage} previous />
        </PaginationItem>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index} active={index + 1 === currentPage}>
            <PaginationLink onClick={() => handlePageClick(index + 1)} href="#">
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink onClick={nextPage} next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => handlePageClick(totalPages)} last />
        </PaginationItem>
      </Pagination>
    </div>
  );
};
