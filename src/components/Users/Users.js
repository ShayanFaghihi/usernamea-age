import React from "react";

import Card from "../UI/Card";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.results.length === 0) return;
  return (
    <Card>
      <ul className={styles["results-list"]}>
        {props.results &&
          props.results.map((result) => (
            <li className={styles["result-item"]} key={result.id}>
              <span className={styles["result-item__username"]}>
                {result.username}{" "}
              </span>
              <span className={styles["result-item__year"]}>{result.age}</span>
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default Users;
