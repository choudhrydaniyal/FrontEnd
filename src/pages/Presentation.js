import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faExternalLinkAlt,
  faTimesCircle,
  faCheckCircle,
  faCalendarAlt,
  faChartLine,
  faEye,
  faCodeBranch,
  faShoppingCart,
  faFolder,
  faMapMarkedAlt,
  faPager,
  faFileCode,
  faDownload,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faGithub,
  faJs,
  faReact,
  faSass,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Routes } from "../routes";
import MockupPresentation from "../assets/img/mockup-presentation2.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import SocialBg from "../assets/img/technologies/social.png";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import pages from "../data/pages";
import AnimatedIcon from "../components/AnimatedIcon";
import Zoom from "react-reveal/Zoom";

const Presentation = ({ logout, isAuthenticated }) => {
  const PagePreview = (props) => {
    const { name, image, link } = props;
    return (
      <Col xs={6} className="mb-5">
        <Card.Link
          as={Link}
          to={link}
          className="page-preview page-preview-lg scale-up-hover-2"
        >
          <Image
            src={image}
            className="shadow-lg rounded scale"
            alt="Dashboard page preview"
          />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name}{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        bg="primary"
        className="navbar-transparent navbar-theme-primary sticky-top"
        style={{ backgroundImage: `url(${SocialBg})` }}
      >
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand
            as={HashLink}
            to="#home"
            className="me-lg-3 d-flex align-items-center"
          >
            <Navbar.Toggle aria-controls="basic-navbar-dropdown" />
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline text-quaternary"></span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                {isAuthenticated ? (
                  <>
                    <Nav.Link
                      as={HashLink}
                      to={Routes.Detection.path}
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        fontWeight: "Bold",
                      }}
                    >
                      {" "}
                      Detect
                    </Nav.Link>
                    <Nav.Link
                      as={HashLink}
                      to={Routes.Settings.path}
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        fontWeight: "Bold",
                      }}
                    >
                      Profile
                    </Nav.Link>
                    {/* <Nav.Link as={HashLink} to="#folder" className="d-sm-none d-xl-inline" style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>Contact</Nav.Link> */}
                    {/* <Nav.Link as={HashLink} to="#getting-started" style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>Getting Started</Nav.Link> */}
                    <Nav.Link
                      as={HashLink}
                      to={Routes.AboutUs.path}
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        fontWeight: "Bold",
                      }}
                    >
                      About
                    </Nav.Link>
                    <Button
                      variant="quaternary"
                      variant="tertiary"
                      as={Link}
                      onClick={() => logout()}
                      style={{ color: "white" }}
                    >
                      {" "}
                      &nbsp;&nbsp;&nbsp;Log Out&nbsp;&nbsp;&nbsp;{" "}
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="quaternary"
                    variant="tertiary"
                    as={Link}
                    to={Routes.Signin.path}
                    style={{ color: "white" }}
                  >
                    &nbsp;&nbsp;&nbsp;Sign-in&nbsp;&nbsp;&nbsp;
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <section
        className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white"
        id="home"
      >
        <Container>
          <Row>
            <Col xs={12} xl={6} className="text-center">
              <div className="react-big-icon d-none d-lg-block align-items-center text-center"></div>
              <h1></h1>
              <h1
                className="brand-text text-quaternary"
                style={{
                  fontSize: "4rem",
                  fontWeight: "1000",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                }}
              >
                FAKE NEWS DETECTOR 2
              </h1>
              <p
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                  fontWeight: "bold",
                }}
              >
                Fake News Detection Made Easy. Detect Fake information within a
                few seconds using one-click detection
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  variant="tertiary"
                  as={Link}
                  to={Routes.DashboardOverview.path}
                  className="text-white me-3"
                >
                  Explore dashboard{" "}
                </Button>
              </div>

              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center"></div>
              </div>
            </Col>
            <Col xl={6} className="animated-icon text-center d-block d-xs-none">
              <AnimatedIcon></AnimatedIcon>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block ">
            <svg
              className="fill-soft"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3000 185.4"
            >
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>

          <div>
            <Row className="justify-content-center mt-5 mt-lg-6">
              <Col xs={6} md={3} className="text-center mb-4">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-secondary"
                  />
                </div>
                <Zoom>
                  <h3 className="fw-bolder">Tweets</h3>
                  <p className="text-gray">View Trends</p>
                </Zoom>
              </Col>
              <Col xs={6} md={3} className="text-center mb-4">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-secondary"
                  />
                </div>
                <Zoom>
                  <h3 className="fw-bolder">Visuals</h3>
                  <p className="text-gray">Explore Daashboard</p>
                </Zoom>
              </Col>

              <Col xs={6} md={3} className="text-center">
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon icon={faEye} className="text-secondary" />
                </div>
                <Zoom>
                  <h3 className="fw-bolder">Detect</h3>
                  <p className="text-gray">One-Click Detection</p>
                </Zoom>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                Your One Destination to Detecting Fake News
              </h2>
              <p className="lead px-lg-10">
                Explore the Dashboard and much more
              </p>
            </Col>
          </Row>
          <Zoom>
            <Row className="mb-5">
              {pages.map((page) => (
                <PagePreview key={`page-${page.id == page}`} {...page} />
              ))}
            </Row>
          </Zoom>
        </Container>
      </section>

      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand
                as={HashLink}
                to="#home"
                className="me-lg-3 mb-3 d-flex align-items-center"
              >
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Fake News Detector</span>
              </Navbar.Brand>
              <p>
                FND is a reimagined way to detect fake news from social media
                postings. Additionaly, it provides you the ability to detect bot
                accounts and provide you with great insights on the text you
                provide
              </p>
              <button
                type="submit"
                className="btn btn-quaternary text-dark shadow-soft btn-block"
                data-loading-text="Sending"
              >
                <span style={{ color: "#fff" }}>One-Click Detection</span>
              </button>
              <div>
                <p></p>
              </div>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <p></p>
              <span className="h5">FND</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link target="_blank" href="">
                    Logout
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="">
                    Profile
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="">
                    About Us
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="">
                    Contact Us
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <div>
                <p></p>
              </div>
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} target="_blank">
                    Getting started
                  </Card.Link>
                </li>
                <li>
                  <Card.Link as={Link} target="_blank">
                    Changelog
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="">
                    License
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-quaternary text-dark shadow-soft btn-block"
                      data-loading-text="Sending"
                    >
                      <span style={{ color: "#fff" }}>Login</span>
                    </button>
                  </div>
                  <div>
                    <p></p>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-quaternary text-dark shadow-soft btn-block"
                      data-loading-text="Sending"
                    >
                      <span style={{ color: "#fff" }}>Register</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">
                We’ll never share your details. See our{" "}
                <Card.Link className="text-white" href="#">
                  Privacy Policy
                </Card.Link>
              </p>
              <div>
                <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                <FontAwesomeIcon icon={faFacebook} /> &nbsp;
                <FontAwesomeIcon icon={faInstagram} /> &nbsp;
              </div>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link
                href=""
                target="_blank"
                className="d-flex justify-content-center"
              >
                <Image
                  src={ReactHero}
                  height={35}
                  className="d-block mx-auto mb-3"
                  alt=""
                />
              </Card.Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  data: state.auth.user,
});
export default connect(mapStateToProps, { logout })(Presentation);
