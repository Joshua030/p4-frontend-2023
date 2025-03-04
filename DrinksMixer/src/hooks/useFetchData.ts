import { useState, useEffect } from "react";
import { Drink, getData } from "../helpers/getData";
import { Category } from "../../Types";


export const useFetchData = (category:Category) => {
    const [data, setData] = useState<Drink[]>();
    const [isLoading, setIsLoading] = useState(true)

    const getnewData = async () => {
        const newData = await getData(category);
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
