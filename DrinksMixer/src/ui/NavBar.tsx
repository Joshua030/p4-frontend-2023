import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import styles from "./NavBar.module.css";
import { Power } from "@phosphor-icons/react";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <div className={`mainContainer ${styles.mainContainer}`}>
      <div className="innerMainContainer">
        <div className={styles.userContainer}>
          <h2>
            <span>{user}</span> enjoys the adventure of cocktail creation
          </h2>
          <div className={styles.buttonContainer}>
            <button onClick={onLogout} className={styles.logoutButton}>
              <Power size={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
