import { Category } from "../../Types";

export interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
    strImageSource?:string;
    strInstructions?:string;
    [key: string]: string | undefined;
  }
  
  export interface DrinksResponse {
    drinks: Drink[];
  }

export const getData = async (category: Category) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`;

  try {
    const response = await fetch(url);

   const data : DrinksResponse  = await response.json();
     const drinks = data.drinks
    return drinks;
  } catch (error) {
    console.error(error);
  }
};
