import React from "react";
import Lottie from "react-lottie";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
import animationData from "./anim.json";
import { useState } from "react";
import { useEffect } from "react";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Login(props) {
  const [msg, setMsg] = useState("");
  const [no, setNo] = useState("");

  useEffect(() => {}, [msg]);
  return (
    <Container>
      <Lottie options={defaultOptions} height={350} width={350} />
      <Container className="d-flex justify-content-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // window.location.reload();
            // console.log(values);
            axios
              .post("/login", { values })
              .then(function (response) {
                if (response.status === 200 || response.statusText === "OK") {
                  console.log("redirecting to ...");
                  window.location.href = "/admin";
                 
                } 
              })
              .catch(function (error) {
                console.log(error.message);
                if(error.message == 'Request failed with status code 401'){
                  setNo("not authorized")
                }else{
                setNo("Invalid password or email address");
                }
              });
          }}
          render={({ submitForm, isSubmitting, values }) => (
            <Form>
              <Container className="w-75" style={{ paddingTop: "5px" }}>
                <h6 className="text-center text-danger"> {no}</h6>
                <Row>
                  <Col xs="12" md="12">
                    <Field
                      required
                      type="email"
                      label="Email"
                      name="email"
                      id="email"
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col xs="12" md="12">
                    <Field
                      required
                      type="password"
                      label="Password"
                      name="password"
                      id="password"
                      component={ReactstrapInput}
                    />
                  </Col>

                  <Col xs="12" md="12">
                    <button
                      type="submit"
                      className="badge bg-info  w-25 p-3 fs-5 my-4 rounded-3 "
                    >
                      Login
                    </button>
                  </Col>
                </Row>
              </Container>
            </Form>
          )}
        />
      </Container>
    </Container>
  );
}

export default Login;
