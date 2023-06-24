import { useParams } from "react-router-dom";
import { useFetchId } from "../../hooks/useFetchId";
import styles from "./Cocktail.module.css";

export const Coctkail = () => {
  const { cocktailId } = useParams();
  const { data, isLoading } = useFetchId(cocktailId ?? "");

  return (
    <div className={`mainContainer ${styles.mainContainer}`}>
      <div className="innerMainContainer">
        <div className={styles.cardContainer}>
          <div className={styles.imgContainer}>
            <img src={data[0].strDrinkThumb} alt={data[0].strDrink} />
          </div>
        </div>
      </div>
    </div>
  );
};
