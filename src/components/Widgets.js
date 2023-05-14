import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GaugeChart from "react-gauge-chart";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { Col, Row, Card, Button } from "react-bootstrap";
import { SalesValueChart } from "./Charts";

import ProfileCover from "../assets/img/profile-cover.jpg";

export const ProfileCardWidget = ({ name, photo }) => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div
        style={{ backgroundImage: `url(${ProfileCover})` }}
        className="profile-cover rounded-top"
      />
      <Card.Body className="pb-5">
        <Card.Img
          src={photo}
          alt="profile Image"
          className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
        />
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="fw-normal">Software Engineer</Card.Subtitle>
        <Card.Text className="text-gray mb-4">Wah Cantt, Pakistan</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidget = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-white shadow-sm">
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">{title}</h5>
          <h3>{value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon
              icon={percentageIcon}
              className={`${percentageColor} me-1`}
            />
            <span className={percentageColor}>{percentage}%</span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">
            Month
          </Button>
          <Button variant="primary" size="sm" className="me-3">
            Week
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChart />
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidgetPhone = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-md-flex flex-row align-items-center flex-0">
        <div className="d-block mb-3 mb-md-0">
          <h5 className="fw-normal mb-2">{title}</h5>
          <h3>{value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon
              icon={percentageIcon}
              className={`${percentageColor} me-1`}
            />
            <span className={percentageColor}>{percentage}%</span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">
            Month
          </Button>
          <Button variant="primary" size="sm" className="me-3">
            Week
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2"></Card.Body>
    </Card>
  );
};

export const DetectionWidget = (props) => {
  const { icon, iconColor, category, title, value, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card
      border="light"
      className="shadow-sm"
      style={{ backgroundColor: "#c3dbeb" }}
    >
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col>
            {/* .................... */}

            <div class="container">
              <div class="row">
                <div class="col-sm">
                  {" "}
                  <GaugeChart
                    id="gauge-chart5"
                    nrOfLevels={420}
                    arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                    colors={[
                      "#870000",
                      "#f28963",
                      "#FFAC40",
                      "#117dbf",
                      "#026038",
                    ]}
                    percent={percentage}
                  />
                </div>
                <div class="col-sm">
                  {" "}
                  <h5>{category}</h5>
                  <h3 className="mb-2" style={{ color: "#f28963" }}>
                    <i>{title}</i>
                  </h3>
                  <h4>
                    <small>
                      {period}Account Status: <i>{value}</i>
                    </small>
                  </h4>
                </div>
              </div>
            </div>
            {/* .................... */}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const Loader = (props) => {
  const { item } = props;

  return <div></div>;
};
