import EMOLIENTES from '../../db/emolientes'
import { CATEGORY } from '../../utils/constants'
import leaf from '../../assets/leaf.svg'
import { useMain } from '../../context/MainContext'
import './DefaultList.css'

const CategoryItem = ({ text }) => (
  <div class="category">
    <img src={leaf} />
    <h2>{text}</h2>
    <img src={leaf} />
  </div>
)

const CategoryEmol = ({ emols }) =>
  emols.map(emol => (
    <div
      key={emol.id ?? emol.name}
      class="item"
      style={{
        backgroundColor: emol.color,
        boxShadow: `0 0 0 .15rem ${emol.color}`
      }}
    >
      <div class="title">
        <h3>{emol.name}</h3>
        <h4>S/. {emol.price}</h4>
      </div>
      <p>{emol.content}</p>
    </div>
  ))

const DefaultList = () => {
  const { activeCategory } = useMain()

  const CATEGORIES_CONFIG = [
    { key: CATEGORY.POPULAR, title: 'Lo Más Vendido' },
    { key: CATEGORY.CLASSIC, title: `Emolientes ${CATEGORY.CLASSIC}` },
    { key: CATEGORY.SPECIAL, title: `Emolientes ${CATEGORY.SPECIAL}` },
    { key: CATEGORY.MEDICINAL, title: `Emolientes ${CATEGORY.MEDICINAL}` }
  ]

  const visibleCategories =
    activeCategory === CATEGORY.ALL
      ? CATEGORIES_CONFIG
      : CATEGORIES_CONFIG.filter(cat => cat.key === activeCategory)

  return (
    <div className="DefaultList">
      {visibleCategories.map(({ key, title, ref }) => {
        const emols = EMOLIENTES.filter(e => e.category.includes(key))
        return (
          <>
            <CategoryItem text={title} />
            <CategoryEmol emols={emols} />
          </>
        )
      })}
    </div>
  )
}

export default DefaultList
