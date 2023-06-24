import { useParams } from "react-router-dom"

export const Coctkail = () => {
  const {cocktailId}=useParams()
  return (
    <div>Coctkail</div>
  )
}
