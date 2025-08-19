import { useParams } from "react-router-dom"

export default function DetailsPage() {
    const {id}=useParams()
    
  return (
    <div>{id}</div>
  )
}
