import { DrinksResponse } from "./getData";


export const getDataById = async (id:string)  => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(url);

   const data : DrinksResponse  = await response.json();
     const drinks = data.drinks
    return drinks;
  } catch (error) {
    console.error(error);
  }
};
