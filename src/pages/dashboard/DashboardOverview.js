import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import { Redirect } from "react-router";
import { HashLink } from "react-router-hash-link";

import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";

import {
  DetectionWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
} from "../../components/Widgets";
import { Dashboard } from "@material-ui/icons";

import {
  checkAuthenticated,
  load_user,
  get_trends,
  get_post,
} from "../../actions/auth";

const DashboardOverview = ({ data, isAuthenticated, get_post }) => {
  useEffect(() => {
    get_post();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (data.length == 0) {
    return <Redirect to="/page" />;
  }
  const latest = data.length;
  console.log(data);
  var per = data[0].text_result;
  const bot = data[0].name_result;
  const outcome = parseFloat(per).toFixed(2) * 100;
  var categoryFake = "";
  if (outcome <= 20) {
    categoryFake = "Pants-fire";
  } else if (outcome <= 40) {
    categoryFake = "False";
  } else if (outcome <= 60) {
    categoryFake = "Barely-True";
  } else if (outcome <= 80) {
    categoryFake = "Mostly-True";
  } else if (outcome <= 100) {
    categoryFake = "True";
  }

  return (
    <>
      {console.log(latest)}
      {console.log(data[latest - 1])}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Button
          className="fw-bold primary"
          as={Link}
          to={Routes.Detection.path}
        >
          <FontAwesomeIcon icon={faPlus} className="me-2" /> Detect New
        </Button>

        <ButtonGroup>
          <Button variant="outline-tertiary" size="sm">
            Share Results
          </Button>
        </ButtonGroup>
      </div>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} xl={12} className="mb-4">
          <DetectionWidget
            title={categoryFake}
            value={bot === true ? " Not Bot" : "Bot"}
            percentage={per}
          />
        </Col>
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Hashtag Trends"
            value="10,567 Mentions"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Hashtag Trends"
            value="10,567 Mentions"
            percentage={10.57}
          />
        </Col>
      </Row>
    </>
  );
};
const mapStateToProps = (state) => ({
  get_post,
  isAuthenticated: state.auth.isAuthenticated,
  data: state.auth.post,
});

export default connect(mapStateToProps, { get_post })(DashboardOverview);
