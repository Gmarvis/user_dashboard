import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./form.css"

const UserForm = ({ currentUser, onSubmit, title, buttonText }) => {
  return (
    <div className="container">
      <Formik
        initialValues={currentUser}
        validate={(values) => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = "first name required";
          }

          if (!values.lastname) {
            errors.lastname = "last name required";
          }

          if (!values.email) {
            errors.email = "email required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        // handle submit
        onSubmit={onSubmit}
      >
        <Form className="form">
          <h1 className="title">{title}</h1>

          <Field
            className="field"
            type="text"
            name="firstname"
            placeholder="Enter Firstname"
          ></Field>
          <ErrorMessage name="firstname" className="error" component="div" />

          <Field
            className="field"
            type="text"
            name="lastname"
            placeholder="Enter Lastname"
          ></Field>
          <ErrorMessage name="lastname" className="error" component="div" />

          <Field
            className="field"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
          ></Field>
          <ErrorMessage name="email" className="error" component="div" />

          <Field
            className="field"
            type="file"
            name="avatar"
            placeholder="upload picture"
            // ref={register}
          ></Field>

          <button type="submit" className="btn">
            {buttonText}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
