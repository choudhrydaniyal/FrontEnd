import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelopeOpen,
  faSearch,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Row,
  Col,
  Nav,
  Form,
  Image,
  Navbar,
  Dropdown,
  Container,
  ListGroup,
  InputGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import { Redirect, useHistory } from "react-router-dom";
import { Routes } from "../routes";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbarc = ({ logout, isAuthenticated, data,profile }) => {
  const [photo1, setphoto1] = useState("");

  
  useEffect(() => {
    if (profile.length != 0) {
      const length = profile.length;

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
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
         
          </div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image
                    src={photo1}
                    className="user-avatar md-avatar rounded-circle"
                  />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">
                      {data.username}
                    </span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item
                  className="fw-bold"
                  as={Link}
                  to={Routes.Settings.path}
                >
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My
                  Profile
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold" as={Link}
                  to={Routes.Settings.path}>
                  <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                </Dropdown.Item>
           

                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold" onClick={() => logout()}>
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="text-danger me-2"
                  />{" "}
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  data: state.auth.user,
  profile: state.auth.profile,

});
export default connect(mapStateToProps, { logout })(Navbarc);
