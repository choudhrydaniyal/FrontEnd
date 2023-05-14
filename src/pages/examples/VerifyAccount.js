import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {    Redirect } from 'react-router-dom'
import { Routes } from "../../routes";
import {connect} from 'react-redux';
import {verify} from '../../actions/auth'


const VerifyAccount=({verify ,match}) => {

  const [verified, setVeried] = useState(false)
  const onsubmit= ()=> {
    const uid=match.params.uid;
    const token=match.params.token
    verify(uid,token)
    setVeried(true)
   
  
   }   

   if(verified){
    return <Redirect to='/' />
}
   
  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
            </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Verify Your Account</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <Form>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">Your Email</Form.Label>
                    {/* <InputGroup id="email">
                      <Form.Control required autoFocus type="email" placeholder="john@company.com" />
                    </InputGroup> */}
                  </div>
                  <Button variant="primary" onClick={onsubmit} type="submit" className="w-100">
                    Confirm 
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};



export default connect(null,{verify})(VerifyAccount)