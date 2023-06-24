import { useEffect, useState } from "react";
import { Drink } from "../helpers/getData";
import { getDataById } from "../helpers/getDataByID";

export const useFetchId = (id:string) => {


  const [data, setData] = useState<Drink[]> ([{strDrink: '',
    strDrinkThumb: '',
    idDrink: '',
    strImageSource:''}]);
  const [isLoading, setIsLoading] = useState(true)

  const getnewData = async () => {
      const newData = await getDataById(id) as Drink[];
      setData(newData);
      setIsLoading(false);
  }
  useEffect(() => {
    getnewData ();
  }, [])

return {
  data,
  isLoading
}
}
