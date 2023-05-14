import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div>
      {range.map((el, index) => (
        <Button
          variant="outline-primary"
          size="small"
          key={index}
          onClick={() => setPage(el)}
        >
          {el}
        </Button>
      ))}
    </div>
  );
};

export default TableFooter;
