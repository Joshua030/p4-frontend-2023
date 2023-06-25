import { Drink } from "./getData";

export const getIngredients =(drink:Drink) => {
  const ingredients = [];
  
  for (let i = 1; i <= 30; i++) {
  const ingredientKey =`strIngredient${i}`;
  const ingredient = drink[ingredientKey];
  console.log(ingredient);
  
  if (ingredient && typeof ingredient === 'string') {
  ingredients.push(ingredient);
  }
}

return ingredients;
}