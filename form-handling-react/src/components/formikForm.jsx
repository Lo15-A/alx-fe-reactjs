import React from "react";
import { useFormik } from "formik";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        // simulate API call
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log("User registered:", data);

        alert("Registration successful!");
        resetForm();
      } catch (error) {
        console.error("Error registering user:", error);
        alert("Registration failed");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Formik Registration Form</h2>

      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username}</p>}
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default FormikForm;
