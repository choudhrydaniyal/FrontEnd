import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, NavItem, Image } from 'react-bootstrap';
import {load_user,update,passwordChange, distroy } from '../actions/auth'
import { connect,useSelector, useDispatch } from 'react-redux'
import {    Redirect, useHistory } from 'react-router-dom'
import { Block } from "@material-ui/icons";
import spinner from "../assets/img/technologies/spinner.gif";


 const Forms = ({isAuthenticated,data,passwordChange,password}) => {
   const [cpassword, setcpassword] = useState(false)
   const [state, setState] = useState(false);
  const [fdata, setfdata] = useState({

    first_name:data.first_name,
    last_name:data.last_name,
    uname:data.username,
    password:'',
    cpassword:''
});


  const [cdata, setcdata] = useState({
    current_password:'',
    new_password:'',
    re_new_password:''
});








  const onSubmit= async(event)=> {
 
    event.preventDefault()
    let  username= fdata.uname
    let first_name=fdata.first_name
    let last_name=fdata.last_name
    let id=data.id
    update(id,username, first_name,last_name)
    }

  const changePassword=async(event)=>{
    setState(true)
    event.preventDefault()
    let  current_password= cdata.current_password
    let new_password=cdata.new_password
    let re_new_password=cdata.re_new_password
    await passwordChange(current_password,new_password,re_new_password)
    setcpassword(true)
    setState(false)
    }
  




  const cinputEvent=(event)=>{
    const value= event.target.value;
    const name= event.target.name;

    setcdata((preValue)=>{
      setcpassword(false)
        return{
            ...preValue,
            [name]:value,
        
    }
    })
    }





const inputEvent=(event)=>{
  const value= event.target.value;
  const name= event.target.name;
 

  setfdata((preValue)=>{
      return{
          ...preValue,
          [name]:value,
      
  }
  })
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="uname"
                  onChange={inputEvent}
                  value={fdata.uname}
                  placeholder="Enter your username"
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  disabled
                  value={data.email}
                  placeholder="name@company.com"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="first_name"
                  value={fdata.first_name}
                  onChange={inputEvent}
                  placeholder="Enter your first name"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="last_name"
                  value={fdata.last_name}
                  onChange={inputEvent}
                  placeholder="Also your last name"
                  va
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3 mb-4" >
            <Button variant="primary" type="submit">Save All</Button>
          </div>
          </Form>
          <Form onSubmit={changePassword}>
          <h5 className="mb-3">Change Password</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="CurrentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control required type="password" name="current_password"  onChange={cinputEvent} placeholder="Enter your current password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="NewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control required type="password" name="new_password"  onChange={cinputEvent} placeholder="Enter new password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="RetypePassword">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control required type="password" name="re_new_password"  onChange={cinputEvent} placeholder="Retype new password" />
              </Form.Group>
            </Col>

            </Row>
            {cpassword ? password ?  <p style={{ color:'green' }}  >Password Change Successfully</p>: <p style={{color:'red'}}  >Invalind Current Password</p> : '' }
           

          <div className="mt-3">
            <Button variant="primary" type="submit">Change Password</Button>
            {state && (
                            <i>
                              <Image
                                className="loader-element animate__animated animate__jackInTheBox"
                                src={spinner}
                                height={40}
                              />
                            </i>
                          )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated,
  data:state.auth.user,
  password:state.auth.password
})
export default connect(mapStateToProps,{load_user,update,passwordChange})(Forms)
