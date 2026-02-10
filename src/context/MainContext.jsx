import { createContext } from "preact"
import { useContext, useState } from "preact/hooks"
import { CATEGORY } from '../utils/constants'

const MainContext = createContext(null)

export const useMain = () => {
  const context = useContext(MainContext)

  if (!context) {
    throw new Error("useMain must be used within MainProvider")
  }

  return context
}

const MainProvider = ({ children }) => {
  const [searchtext, setSearchText] = useState('')
  const [activeCategory, setActiveCategory] = useState(CATEGORY.ALL)
  
  const values = {
    searchtext, setSearchText,
    activeCategory, setActiveCategory,
  }

  return (
    <MainContext.Provider
      value={ values }>
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider
