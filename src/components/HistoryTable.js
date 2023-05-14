import React, { useState } from "react";
import PageVisitsTable from "./PaginationTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Card,
  Button,
  Table,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TableFooter from "./TableFooter";
import { get_post, destroy } from "../actions/auth";

const HistoryTable = ({ data, destroy, isAuthenticated }) => {
  const [page, setPage] = useState(1);
  
  if(!isAuthenticated){
    return <Redirect to='/'/>
   }
  let count= 1+(page-1)*7
  const rowsPerPage=7;
  const total=data.length 
  const { slice, range } = PageVisitsTable(data, page, rowsPerPage);

  const mystyle = {
    textOverflow: "ellipsis",
    width: "270px",
    whiteSpace: "nowrap",
    overflow: "hidden",
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Account Status</th>
              <th className="border-bottom">text</th>
              <th className="border-bottom">text Tesult</th>
            </tr>
          </thead>
          <tbody>
            {slice.map(({ id, name, text, text_result, name_result }) => (
              <tr>
                <td>
                  <Card.Link as={Link} className="fw-normal">
                    {count++}
                  </Card.Link>
                </td>
                <td>
                  <span className="fw-normal">{name}</span>
                </td>
                <td>
                  <span className="fw-normal">
                    {name_result === true ? " Not Bot" : "Bot"}
                  </span>
                </td>
                <td>
                  <p className="fw-normal" style={mystyle}>
                    {text}
                  </p>
                </td>

                <td>
                  <span className="fw-normal">
                    {parseFloat(text_result).toFixed(2) * 100}%
                  </span>
                </td>

                <td>
                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle
                      as={Button}
                      split
                      variant="link"
                      className="text-dark m-0 p-0"
                    >
                      <span className="icon icon-sm">
                        <FontAwesomeIcon
                          icon={faEllipsisH}
                          className="icon-dark"
                        />
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="text-danger"
                        onClick={() => {
                          destroy(id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                        Remove
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <TableFooter
              type="button"
              class="btn btn-primary"
              range={range}
              slice={slice}
              setPage={setPage}
              page={page}
            />
          </Nav>
          <small className="fw-bold">
            Total <b> entries: {total}</b>
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  data: state.auth.post,
});
export default connect(mapStateToProps, { get_post, destroy })(HistoryTable);
