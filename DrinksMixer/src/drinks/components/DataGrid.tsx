import { Category } from "../../../Types";
import { useFetchData } from "../../hooks/useFetchData";
import { CocktailCard } from "./CocktailCard";
import styles from "./DataGrid.module.css";

interface Props {
  category: Category;
}



export const DataGrid: React.FC<Props> = ({ category }) => {
  const { data, isLoading } = useFetchData(category);

  return <div className={styles.gridContainer}>
      {data?.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} 
        {...cocktail} 
        />
      ))}
  </div>;
};
