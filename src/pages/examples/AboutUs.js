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
import Irtaza from "../../assets/img/aboutUsI.jpg";
import Asad from "../../assets/img/aboutUsA.jpg";
import FadeIn from 'react-fade-in';

const AboutUs = () => {
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row>
            <Col xs={12} xl={6} className="text-center">
              <Link to={Routes.Presentation.path}>
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" />
                Back to homepage{" "}
              </Link>
              <h1
                className="brand-text text-quaternary"
                style={{
                  fontSize: "4rem",
                  fontWeight: "1000",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                }}
              >
                ABOUT US
              </h1>
              <p>
                An effort to expedite detection of fake news and detecting
                twitter bot users, using Machine Learning techniques. This
                web-application is jointly developed by Asad and Irtaza. We
                started working on this idea earlier 2021. The idea came from a
                deep interest of pattern anaylsis in text data. We appreciate
                your visit to our website. We look forward to your feedback and
                are dedicated to continually improving our project.
              </p>
            </Col>
            <Col>
              <h1
                className="brand-text text-quaternary"
                style={{
                  fontSize: "4rem",
                  fontWeight: "1000",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                }}
              ></h1>
                    <FadeIn>
                <div>
                  <img src={Asad} alt="about-us-illustration" />
                </div>
                </FadeIn>

            </Col>
            <Col>
            <FadeIn>
                <div>
                  <img src={Irtaza} alt="about-us-illustration" />
                </div>
                </FadeIn>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default AboutUs;
