import React from "react";
import { Button, Form, FormGroup, Input, Container } from "reactstrap";
import Lottie from "react-lottie";
import animationData from "./anim.json";
import { Formik } from "formik";
import Test from "../Test";
import { Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Registration(props) {
  return (
    <Container>
      <Lottie options={defaultOptions} height={250} width={250} />
      <Container className="d-flex flex-column justify-content-center">
        <Test />
       
      </Container>
    </Container>
  );
}

export default Registration;
