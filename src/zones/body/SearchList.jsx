import EMOLIENTES from "../../db/emolientes"
import { useMain } from "../../context/MainContext"
import leaf from '../../assets/leaf.svg'

const SearchList = () => {
  
  const { searchtext } = useMain()
  
  const normalizeText = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const busqueda = EMOLIENTES.filter(emo => normalizeText(emo.name).includes(normalizeText(searchtext)))
  
  const CategoryItem = (text) => {
    return (
      <div class='category'>
        <img src={leaf} />
        <h2>{text}</h2>
        <img src={leaf} />
      </div>
    )
  }
  
  const CategoryEmol = (emols) => {
    return emols.map(emol =>
      <div class='item' 
        style={{ backgroundColor: emol.color, boxShadow: `0 0 0 .15rem ${emol.color}` }}>
        <div class='title'>
          <h3>{emol.name}</h3>
          <h4>
            S/. {emol.price}
          </h4>
        </div>
        <p>{emol.content}</p>
      </div>
    )
  }
  
  return (
    <div class="DefaultList">
      {CategoryItem('Búsqueda')}
      {
        busqueda.length > 0 ?
        CategoryEmol(busqueda) :
        <div class='empty'>
          No se encontraron Emolientes :(
        </div>
      }
    </div>
  )
}

export default SearchList