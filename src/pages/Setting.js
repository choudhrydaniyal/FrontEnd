import React, { useState, useEffect } from "react";

import { Col, Row, Button, Dropdown } from "react-bootstrap";
import { ProfileCardWidget } from "../components/Widgets";
import Forms from "../components/Forms";
import { connect, useSelector, useDispatch } from "react-redux";

import { Redirect } from "react-router";
import { get_profile } from "../actions/auth";
import ChoosePhotoWidget from "../components/ChoosePhotoWidget";


const Setting = ({ data, isAuthenticated, profile, get_profile }) => {
  const [photo1, setphoto1] = useState("");
  console.log(profile)
  useEffect(() => {
    if (profile.length != 0) {
      const length = profile.length;

      console.log(profile[length - 1].image);
      setphoto1("https://irtaza780.pythonanywhere.com" + profile[length - 1].image);
    } else {
      setphoto1(
        "https://gravatar.com/avatar/ebd9bee59cb2e199586042ca9527a31c?s=400&d=mp&r=x"
      );
    }
  }, [profile]);


  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>

      <Row className="settingsContainer">
        <Col xs={12} xl={8}>
          <Forms />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget photo={photo1} name={data.username} />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget title="Select profile photo" photo={photo1} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  data: state.auth.user,
  profile: state.auth.profile,
});
export default connect(mapStateToProps)(Setting);
