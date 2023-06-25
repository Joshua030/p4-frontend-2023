import { useNavigate, useParams } from "react-router-dom";
import { useFetchId } from "../../hooks/useFetchId";
import styles from "./Cocktail.module.css";
import { getIngredients } from "../../helpers/getIngredients";
import { getMeasure } from "../../helpers/getMeasure";
import { ArrowUUpLeft, Check } from "@phosphor-icons/react";

export const Coctkail = () => {
  const { cocktailId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchId(cocktailId ?? "");

  const ingredients = getIngredients(data[0]);
  const measures = getMeasure(data[0]);
  console.log(ingredients);

  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    <div className={`mainContainer ${styles.mainContainer}`}>
      <div className={`innerMainContainer ${styles.innerContainer}`}>
        <div className={styles.cardContainer}>
          <div className={styles.imgContainer}>
            <img src={data[0].strDrinkThumb} alt={data[0].strDrink} />
            <p>{data[0].strCategory}</p>
          </div>
          <div className={styles.textContainer}>
            <h2>{data[0].strDrink}</h2>
            <p>{data[0].strInstructions}</p>
            <div className={styles.listContainer}>
              <ul>
                <li>Ingredients</li>
                {ingredients?.map((ingredient, id) => (
                  <li key={id}>{ingredient}</li>
                ))}
              </ul>
              <ul>
              <li>Measure</li>
                {measures?.map((measure, id) => (
                  <li key={id}>{measure}</li>
                ))}
              </ul>
            </div>
            <button onClick={onNavigateBack} className={styles.navigateBack}>
            <ArrowUUpLeft size={48} weight="bold"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
