import { CATEGORY } from "../../utils/constants"
import { vibration } from "../../utils/utils"
import { useMain } from "../../context/MainContext"
import { useState, useRef } from "preact/hooks"
import  './CategoryBar.css'

const CategoryBar = () => {
  
  const [selected, setSelected] = useState(0)
  const { setActiveCategory, setSearchText } = useMain()
  const categoryRef = useRef(null)
  
  const goToSeccion = (i, category) => {
    categoryRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    vibration()
    setSearchText('')
    setSelected(i)
    setActiveCategory(category)
  }
  
  const setCss = (i) => {
    let css = ''
    if (i === selected) {
      css = 'selected'
    }
    return css
  }
  
  const categories = [
    {
      name: CATEGORY.ALL,
    },
    {
      name: CATEGORY.CLASSIC,
    },
    {
      name: CATEGORY.SPECIAL,
    },
    {
      name: CATEGORY.MEDICINAL,
    },
  ]
  
  return (
    <>
    <div class='CategoryRef'
      ref={categoryRef}></div>
    <div className="CategoryBar">
    {
      categories.map((categ, i) => 
        <div class={`cont ${setCss(i)}`}
          key={categ.name}
          onClick={() => goToSeccion(i, categ.name)}>
          <h2>{categ.name}</h2>
        </div>
      )
    }
    </div>
    </>
  )
}

export default CategoryBar