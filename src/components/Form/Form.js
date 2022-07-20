import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../Modal/Modal";

import styles from "./Form.module.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setUsername(e.target.value);
    }
  };

  const ageHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setAge(e.target.value);
    }
  };

  const addResultHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      // When we have empty inputs
      setError({
        title: "Input Error",
        message: "Please fill the form with valid data",
      });
      return;
    }

    if (+age < 1) {
      //When user addes a negative number as age
      setError({
        title: "Age Error",
        message: "You should enter age more than 1",
      });
      return;
    }

    props.onFormData({
      id: Math.random(),
      username,
      age,
    });

    // Clear Form Value
    setAge("");
    setUsername("");
    e.target.reset();
  };

  // Closing Modal
  const closeModalHandler = () => {
    setError('');
  }

  return (
    <div>
      {error && <Modal errors={error} onCloseModal={closeModalHandler}/> }
      <Card>
        <form onSubmit={addResultHandler}>
          <div className={styles["form-control"]}>
            <input
              onChange={usernameHandler}
              type="text"
              name="username"
              id="username"
              className={styles.username}
              placeholder="Username"
            />
          </div>
          <div className={styles["form-control"]}>
            <input
              onChange={ageHandler}
              type="number"
              name="age"
              id="age"
              className={styles.age}
              placeholder="Age (Years)"
            />
          </div>
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
