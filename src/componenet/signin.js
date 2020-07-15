import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const SignupFormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Confirm your email"  group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Your password" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default SignupFormPage;