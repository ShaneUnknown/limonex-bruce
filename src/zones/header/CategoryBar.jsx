import { CATEGORY } from "../../utils/constants"
import { classicRef, specialRef, medicinalRef } from "../body/DefaultList"
import  './CategoryBar.css'

const CategoryBar = () => {
  
  const goToSeccion = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  
  const categories = [
    {
      name: CATEGORY.CLASSIC,
      ref: classicRef
    },
    {
      name: CATEGORY.SPECIAL,
      ref: specialRef
    },
    {
      name: CATEGORY.MEDICINAL,
      ref: medicinalRef
    },
  ]
  
  return (
    <div className="CategoryBar">
    {
      categories.map(categ => 
        <div class='cont' 
          key={categ.name}
          onClick={()=>goToSeccion(categ.ref)}>
          <h2>{categ.name}</h2>
        </div>
      )
    }
    </div>
  )
}

export default CategoryBar