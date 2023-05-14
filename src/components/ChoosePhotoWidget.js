import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

import { Col, Row, Card, Image, Button, Form } from "react-bootstrap";

import { get_profile, load_user, Upload_profile } from "../actions/auth";


const ChoosePhotoWidget = ({ title, photo, user, Upload_profile,get_profile,imageName }) => {
  
  const [data, setdata] = useState({
    profile_image: "",
    user_id: 0,
  });

  const imageChange = (event) => {
    const value = event.target.files[0];

    const name = event.target.name;
    setdata((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const { profile_image } = data;
  if (profile_image.name != null) {
    imageName = profile_image.name;
  } else {
    imageName = "No image selected";
  }
  const id = user.id;
  const imageSubmit = async (event) => {
    event.preventDefault();
    Upload_profile(data, id);
    get_profile();
  };

  return (
    <Form onSubmit={imageSubmit}>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">{title}</h5>
          <div className="d-xl-flex align-items-center">
            <div className="user-avatar xl-avatar">
              <Image fluid rounded src={photo} />
            </div>
            <div className="file-field">
              <div className="d-flex justify-content-xl-center ms-xl-3">
                <div className="d-flex">
                  <span className="icon icon-md">
                    <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                  </span>

                  {/* profile image */}
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={imageChange}
                      name="profile_image"
                    />

                    <div className="d-md-block text-start">
                      <div className="fw-normal text-dark mb-1">
                        Choose Image
                      </div>
                      <div className="text-gray small">{imageName}</div>
                      <div>
                        <p></p>
                        <Button variant="tertiary text-white" type="submit">
                          Change
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Form>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  pagestate: state.auth.pagestate,
  user: state.auth.user,
});
export default connect(mapStateToProps, { Upload_profile, get_profile })(
  ChoosePhotoWidget
);
