import { Drink } from "./getData";

export const getMeasure =(drink:Drink) => {
  const measures = [];
  
  for (let i = 1; i <= 30; i++) {
  const measureKey =`strMeasure${i}`;
  const measure = drink[measureKey];
 
  
  if (measure && typeof measure === 'string') {
    measures.push(measure);
  }
}

return measures;
}