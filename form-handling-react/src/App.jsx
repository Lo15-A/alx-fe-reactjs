// src/App.jsx
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
// For Formik form:
import FormikForm from "./components/formikForm.jsx"; //

function App() {
  return (
    <div>
      <h1 style={{ color: "blue", textAlign: "center" }}>Welcome to Form Handling</h1>
      <RegistrationForm />
      {/* <FormikForm /> Uncomment to test Formik form */}
    </div>
  );
}

export default App;
