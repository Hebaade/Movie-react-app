import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";
const PaginationComponent = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    getPage(data.selected + 1);
  };
  return (
    <div className="paginate">
      <ReactPaginate
        style={{ width: "50%" }}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default PaginationComponent;
