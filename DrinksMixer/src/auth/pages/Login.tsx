import { useContext, useState } from "react";
import styles from "./Login.module.css";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  const { nickName, onInputChange } = useForm({
    nickName: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const lastPath = localStorage.getItem("lastPath") || "/";
    if (nickName.length < 1) return;
    login(nickName);
    navigate(lastPath, {
      replace: true,
    });
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`mainContainer ${styles.mainContainer} ${
        hovered ? styles.blur : ""
      }`}
    >
<div className={styles.backGroundContainer}>
</div>
      <div className={`innerMainContainer ${styles.innerContainer}`}>

          <form
            onSubmit={handleLogin}
            className={styles.formContainer}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          >
            <input
              type="text"
              name="nickName"
              value={nickName}
              placeholder="Your Name Here"
              onChange={onInputChange}
              autoComplete="off"
              className={styles.formField}
            />
            <label htmlFor="nickName" className={styles.formLabel}>
              Name
            </label>
          </form>
      </div>
    </div>
  );
};
