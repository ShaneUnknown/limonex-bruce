import EMOLIENTES from '../../db/emolientes'
import { CATEGORY } from '../../utils/constants'
import { createRef } from "preact";
import leaf from '../../assets/leaf.svg'
import  './DefaultList.css'

export const classicRef = createRef(null);
export const specialRef = createRef(null);
export const medicinalRef = createRef(null);

const DefaultList = () => {

  const populares = EMOLIENTES.filter(emo => emo.category.includes(CATEGORY.POPULAR))
  
  const clasicos = EMOLIENTES.filter(emo => emo.category.includes(CATEGORY.CLASSIC))
  
  const especiales = EMOLIENTES.filter(emo => emo.category.includes(CATEGORY.SPECIAL))
  
  const medicinales = EMOLIENTES.filter(emo => emo.category.includes(CATEGORY.MEDICINAL))
  
  const CategoryItem = (text, ref) => {
    return (
      <div ref={ref} class='category'>
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
    <div className='DefaultList'>
    
    {CategoryItem('Lo Más Vendido')}
    {CategoryEmol(populares)}
    
    {CategoryItem(`Emolientes ${CATEGORY.CLASSIC}`, classicRef)}
    {CategoryEmol(clasicos)}
    
    {CategoryItem(`Emolientes ${CATEGORY.SPECIAL}`, specialRef)}
    {CategoryEmol(especiales)}
    
    {CategoryItem(`Emolientes ${CATEGORY.MEDICINAL}`, medicinalRef)}
    {CategoryEmol(medicinales)}
    
    </div>
  )
}

export default DefaultList