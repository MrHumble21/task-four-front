import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
// import { redirect } from "react-router-dom";
function Test() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        surname: "",
        confirmedPassword: "",
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
        axios
          .post("/create_user", values)
          .then(function (response) {
            console.log(response);
            if (response.status === 200 || response.statusText === "OK") {
              console.log("redirecting to ...");
              window.location.href = "/admin";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }}
      render={({ submitForm, isSubmitting, values }) => (
        <Form>
          <Container className="w-75" style={{ paddingTop: "5px" }}>
            <Row>
              <Col xs="12" md="12">
                <Field
                  type="name"
                  label="Name"
                  name="name"
                  required
                  id="name"
                  component={ReactstrapInput}
                />
              </Col>
              <Col xs="12" md="12">
                <Field
                  required
                  type="surname"
                  label="surname"
                  name="surname"
                  id="surname"
                  component={ReactstrapInput}
                />
              </Col>
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
              {values.confirmedPassword === values.password ||
              values.confirmedPassword === "" ? (
                ""
              ) : (
                <h5 className="text-danger my-2 text-center">
                  {"passwords did not match".toUpperCase()}
                </h5>
              )}
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
                <Field
                  required
                  type="password"
                  label="Confirm Password"
                  name="confirmedPassword"
                  id="confirmedPassword"
                  component={ReactstrapInput}
                />
              </Col>

              <Col xs="12 my-2" className="">
                <div className="d-flex   align-items-center justify-content-around">
                  {values.confirmedPassword === values.password ||
                  values.confirmedPassword === "" ? (
                    <button
                      className=" badge bg-success w-25 p-2 fs-6 rounded-1 "
                      type="submit"
                    >
                      Register
                    </button>
                  ) : (
                    <span
                      disabled
                      className="  w-25 p-1 rounded-0 "
                      type="submit"
                    >
                      Register
                    </span>
                  )}
                  <Link to={"/login"} className="text-decoration-none">
                    <span disabled className="   p-1 rounded-0 " type="submit">
                      Already have an account Sign In?
                    </span>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    />
  );
}

export default Test;
