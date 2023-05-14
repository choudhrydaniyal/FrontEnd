

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from 'react-bootstrap';
import { Link,Redirect,useHistory } from 'react-router-dom';
import {connect} from 'react-redux'
import React,{useState,useEffect} from "react";

import {reset_password_confirm} from '../../actions/auth'

import { Routes } from "../../routes";
import BgImage from "../graphics/password.svg"


const ResetPassword=({match,reset_password_confirm,isAuthenticated}) => {
  const [requestSent, setrequestSent] = useState(false)

  const history=useHistory();
  const [modal, setmodal] = useState(true)
 
   const [data, setdata] = useState({
       cpassword:'',
       password:'',

   })

   


  const onchangeEvent=(event)=>{
  const value= event.target.value;
  const name= event.target.name;

  setdata((preValue)=>{
      return{
          ...preValue,
          [name]:value,
      
  }
})    
}
const {cpassword,password}=data
const onsubmit= async(event)=> {
  event.preventDefault()
  const uid=match.params.uid;
  const token=match.params.token;
  alert("Asad")
  reset_password_confirm(uid,token,password,cpassword) 
  setrequestSent(true)

}   

if(requestSent){
  return <Redirect to='/' />
}




  return (
    <main>
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">Change password</h3>
                <Form onSubmit={onsubmit}>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>New Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control name="password" required onChange={onchangeEvent} type="password" placeholder="Password" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required name="cpassword" onChange={onchangeEvent} type="password" placeholder="Confirm Password" />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Reset password
                  </Button>
                </Form>
                <div>
                  <p></p>
                 <center> <img src={BgImage} alt="Image" style={{width:"200px"}}></img> </center>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  forgot:state.auth.forgot
})
export default connect(mapStateToProps,{reset_password_confirm})(ResetPassword);