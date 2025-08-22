import React from "react";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header stays at the top */}
      <header style={{ padding: "20px 0", textAlign: "center" }}>
        <h1>Welcome to Form Handling</h1>
      </header>

      {/* Form stays in the middle (or wherever you want) */}
      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", marginTop: "20px" }}>
        <FormikForm />
      </main>
    </div>
  );
}

export default App;
