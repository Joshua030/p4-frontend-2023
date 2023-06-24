import { Martini, Brandy  } from "@phosphor-icons/react";
import { Drink} from "../../helpers/getData";
import styles from "./CocktailCard.module.css";
import { Link } from "react-router-dom";

export const CocktailCard = ({ strDrink, strDrinkThumb, idDrink }: Drink) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={strDrinkThumb} alt={idDrink} />
      </div>
      <div className={styles.titleContainer}>
      <Brandy size={24} color="#e993f5" className={styles.brandyIcon} />
      <Martini size={24} color="#e993f5" className={styles.MartiniIcon}/>
        <Link to={`/cocktail/${idDrink}`}>{strDrink}</Link>
      </div>
    </div>
  );
};
