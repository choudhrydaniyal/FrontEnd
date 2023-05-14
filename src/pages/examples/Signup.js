import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import { signup } from "../../actions/auth";
import axios from "axios";
import { connect } from "react-redux";
import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { Alert } from "bootstrap";

const Signup = ({ signup, isAuthenticated }) => {
  const [data, setdata] = useState({
    first_name: "",
    last_name: "",
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [accountCreated, setaccountCreated] = useState(false);
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    let email = data.email;
    let username = data.uname;
    let password = data.password;
    let fpassword = data.password;

    let re_password = data.cpassword;
    let first_name = data.first_name;
    let last_name = data.last_name;
    if (password === re_password) {
      signup(
        username,
        first_name,
        last_name,
        email,
        password,
        re_password,
        fpassword
      );
      setaccountCreated(true);
    } else {
      alert("Password Not Match");
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/index" />;
  }
  if (accountCreated) {
    return <Redirect to="/" />;
  }

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setdata((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link
              as={Link}
              to={Routes.Presentation.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4" onSubmit={onSubmit}>
                  <Form.Group id="username" className="mb-4">
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        name="first_name"
                        onChange={inputEvent}
                        required
                        type="text"
                        placeholder="First Name"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="username" className="mb-4">
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        name="last_name"
                        onChange={inputEvent}
                        required
                        type="text"
                        placeholder="Last Name"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        name="email"
                        onChange={inputEvent}
                        placeholder="example@company.com"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="username" className="mb-4">
                    <Form.Label>Your username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        name="uname"
                        onChange={inputEvent}
                        required
                        type="text"
                        placeholder="IUsername"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        onChange={inputEvent}
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    id="confirmPassword"
                    name="cpassword"
                    className="mb-4"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        onChange={inputEvent}
                        name="cpassword"
                        required
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGoogle} />
                  </Button>
                </div> */}
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={Routes.Signin.path}
                      className="fw-bold"
                    >
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
