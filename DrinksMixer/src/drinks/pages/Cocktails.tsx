

import { DataGrid } from "../components/DataGrid"

 enum Category {
  Alcoholic = "Alcoholic",
  Non_Alcoholic = "Non_Alcoholic",
}


export const Cocktails = () => {
  return (
    <div>

    <DataGrid category={Category.Alcoholic}/>
    </div>
  )
}
