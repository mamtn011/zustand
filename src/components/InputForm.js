import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import useUsers from "../store/store.user";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required!"),
});

const InputForm = () => {
  const { addUser } = useUsers();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema,

    onSubmit: (values, { resetForm }) => {
      addUser({ id: new Date().getTime(), ...values });
      resetForm();
    },
  });
  return (
    <Form
      className="m-auto"
      onSubmit={formik.handleSubmit}
      style={{ width: "50vw" }}
    >
      <Form.Group className="mb-3">
        <Form.Control
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        {formik.errors.name && formik.touched.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
      </Form.Group>

      <Button type="submit" style={{ width: "100%", marginBottom: "20px" }}>
        Add User
      </Button>
    </Form>
  );
};

export default InputForm;
