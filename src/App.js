import React, { useState } from "react";
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";

import "./App.css";

function App() {
  const [userData, setUserData] = useState('');
 
  const storeNewData = (data) => {
    setUserData((prevItem) => {
      return [...prevItem,data];
    });
  };

  return (
    <section className="container">
      <Form onFormData={storeNewData} />
      <Users results={userData} />
    </section>
  );
}

export default App;
