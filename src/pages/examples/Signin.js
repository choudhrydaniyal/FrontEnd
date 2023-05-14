import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
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
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { add } from "../../actions/auth";

const Signin = ({ add, isAuthenticated, pagestate }) => {
  const [eCheck, seteCheck] = useState("none");

  const history = useHistory();
  const [modal, setmodal] = useState(true);

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setmodal(pagestate);
  });
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const onchangeEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setdata((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const { email, password } = data;
  const onsubmit = async (event) => {
    event.preventDefault();
    await add(email, password);
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      seteCheck("block");
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

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
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4" onSubmit={onsubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        onChange={onchangeEvent}
                        autoFocus
                        required
                        type="email"
                        placeholder="example@company.com"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          name="password"
                          onChange={onchangeEvent}
                          required
                          type="password"
                          placeholder="Password"
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <Form.Label
                          className="mb-0 text-danger"
                          style={{ display: eCheck }}
                        >
                          Invalid Email or Password
                        </Form.Label>
                      </Form.Check>
                      <Card.Link
                        className="small text-end"
                        as={Link}
                        to={Routes.ForgotPassword.path}
                      >
                        Lost password?
                      </Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      as={Link}
                      to={Routes.Signup.path}
                      className="fw-bold"
                    >
                      {` Create account `}
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
  pagestate: state.auth.pagestate,
});
export default connect(mapStateToProps, { add })(Signin);
