import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx";

function App() {
  return (
    <div>
      <h1 style={{ color: "royalblue", textAlign: "center" }}>
        Welcome to Form Handling
      </h1>
      <RegistrationForm />
      <FormikForm />  {/* Now it will render */}
    </div>
  );
}

export default App;
