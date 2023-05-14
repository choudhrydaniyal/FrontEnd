import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import HistoryTable from "../components/HistoryTable";

const History = () => {
  return (
    <>
      <div className="align-items-left py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>History</h4>
          <p className="mb-0">Usage History.</p>
        </div>
        <div className="mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-tertiary" size="sm">
              Share
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <HistoryTable />
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(History);
