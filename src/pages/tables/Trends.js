import React from "react";

import { get_trends } from "../../actions/auth";
import { connect} from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {
  Card,
  Table,
} from "react-bootstrap";


function Trends({ isAuthenticated, data }) {
 
  
  const TableRow = (props) => {
    const { name, tweet_volume } = props;
  

    return (
      <tr>
        <th scope="row">{name}</th>
        <td>{tweet_volume}</td>
        {/* <td>${returnValue}</td> */}
        <td>{/* {Math.abs(bounceRate)}% */}</td>
      </tr>
    );
  };

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  
 
 
 
  return (
    <div>
      <Card border="light" className="shadow-sm mb-4">
        <Card.Body className="pb-0">
          <Table
            responsive
            className="table-centered table-nowrap rounded mb-0"
          >
            <thead className="thead-light">
              <tr>
                <th className="border-0">#Name</th>
                <th className="border-0">tweet volume</th>
              </tr>
            </thead>
            <tbody>
            {data ? data.map((pt) => (
                <TableRow key={`page-traffic-${pt.id}`} {...pt} />
              )) : "not found "
            }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  data: state.auth.trends,
});

export default connect(mapStateToProps, { get_trends })(Trends);
