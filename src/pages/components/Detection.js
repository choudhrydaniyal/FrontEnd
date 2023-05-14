import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFont, faPaste } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, InputGroup, Row, Image, Col } from "react-bootstrap";
import DetectBG1 from "../../assets/img/illustrations/upper.png";
import DetectBG2 from "../../assets/img/illustrations/lower.png";
import { Redirect } from "react-router-dom";
import { detection, get_post } from "../../actions/auth";
import { Loader } from "../../components/Widgets";
import spinner from "../../assets/img/technologies/spinner.gif";

function Detection({ user, detection, get_post, isAuthenticated }) {
  const [requestSent, setrequestSent] = useState(false);

  const [state, setState] = useState(false);

  const [data, setdata] = useState({
    name: "",
    text: "",
  });
  if (!isAuthenticated) {
    return <Redirect to="" />;
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

  const { text, name } = data;

  const id = user.id;
  const onsubmit = async (event) => {
    setState(true);
    event.preventDefault();
    await detection(text, name, id);
    get_post();
    setrequestSent(true);
  };

  if (requestSent) {
    get_post();
    return <Redirect to="/dashboard/overview" />;
  }
  return (
    <body class="new-header">
      <div class="text-style-det d-none d-xl-block">
        <h1>One-Click Detection </h1>
      </div>
      <div class=" d-xl-none">
        <center>
          <h1>One-Click Detection</h1>
        </center>
      </div>
      <div class="d-none d-xl-block image-style1 ">
        <img src={DetectBG1} alt="upper-graphic" />
      </div>
      <div class="d-none d-xl-block image-style2">
        <img src={DetectBG2} alt="Lower-graphic" />
      </div>
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm">
                    <Form className="mt-2" onSubmit={onsubmit}>
                      <Form.Group id="username" className="mb-4 mt-1">
                        <Form.Label>Enter Tweet/Text</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faFont} />
                          </InputGroup.Text>
                          <Form.Control
                            autoFocus
                            type="text"
                            placeholder="Text"
                            name="text"
                            onChange={onchangeEvent}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="handle" className="mb-4">
                        <Form.Label>Enter Twitter Handle</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="text"
                            name="name"
                            placeholder="@twitterhandle"
                            onChange={onchangeEvent}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Row>
                        <Col>
                          <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                            disabled={state}
                          >
                            Detect{" "}
                          </Button>
                        </Col>
                        <Col>
                          {state && (
                            <i>
                              <Image
                                className="loader-element animate__animated animate__jackInTheBox"
                                src={spinner}
                                height={40}
                              />
                            </i>
                          )}
                        </Col>
                      </Row>
                    </Form>
                  </div>

                  <div class="col d-none d-xl-block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  pagestate: state.auth.pagestate,
  user: state.auth.user,
});
export default connect(mapStateToProps, { detection, get_post })(Detection);
