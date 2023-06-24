import { useState } from "react";
import styles from "./Login.module.css";
import { FormState, useForm } from "../../hooks/useForm";

export const Login = () => {
  const { nickName, onInputChange } = useForm  ({
    nickName: "",
  });

  const handleLogin = (): void => {
    console.log("log");
  };
  return (
    <div className={`mainContainer`}>
      <div className={`innerMainContainer`}>
        <form onSubmit={handleLogin} className={styles.formContainer}>
          <input
            type="text"
            name="nickName"
            value={nickName}
            placeholder="Your Name Here"
            onChange={onInputChange}
          />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};
