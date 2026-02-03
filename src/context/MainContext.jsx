import { createContext } from "preact"
import { useContext, useState } from "preact/hooks"

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
  const [activeCategory, setActiveCategory] = useState('TODO')
  
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
