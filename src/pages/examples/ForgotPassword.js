
import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from 'react-bootstrap';
import { Link,Redirect,useHistory } from 'react-router-dom';
import {reset_password} from '../../actions/auth'
import { Routes } from "../../routes";
import {connect} from 'react-redux'

import BgImage from "../graphics/password.svg";

const ForgotPassword= ({reset_password,isAuthenticated}) => {
  const [validation, setvalidation] = useState('none')
  const [Success, setSuccess] = useState('none')
const [action, setaction] = useState(false)
  const history=useHistory();
  const [modal, setmodal] = useState(true)
 
   const [data, setdata] = useState({
       email:'',

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



  const {email}=data
const onsubmit= async(event)=> {
event.preventDefault()
console.log(reset_password(email))
if(reset_password(email)){
  setaction(true) 
}
if(action){
  setvalidation('none')
  setSuccess('block')
}else{
  setSuccess('none')
  setvalidation('block')
}
}   





  if(isAuthenticated){
    return <Redirect to='/'/>
  }



  
  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container >
          <Row className="justify-content-center" >
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
            </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <Form onSubmit={onsubmit}>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">Your Email</Form.Label>
                    <InputGroup id="email">
                      <Form.Control required onChange={onchangeEvent} autoFocus type="email" name="email" placeholder="john@company.com" />
                    </InputGroup>
                    <p style={{fontSize:14,display:validation}} className='text-danger' >Invalid Email</p>
                    <p style={{fontSize:14,display:Success}} className='text-success' >Check Your Email</p>

                  </div>
                  <Button variant="primary" type="submit" className="w-100">
                    Recover password
                  </Button>
                </Form>
                <div>
                  <p></p>
                 <center> <img src={BgImage} alt="Image" style={{width:"300px"}}></img> </center>
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
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{reset_password})(ForgotPassword)