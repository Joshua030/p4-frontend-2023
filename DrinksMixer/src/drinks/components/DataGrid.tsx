import { Category } from "../../../Types";
import { useFetchData } from "../../hooks/useFetchData";

interface Props {
  category: Category;
}



export const DataGrid: React.FC<Props> = ({ category }) => {
  const { data, isLoading } = useFetchData(category);

  return <div>
      {data.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} 
        {...cocktail} 
        />
      ))}
  </div>;
};
