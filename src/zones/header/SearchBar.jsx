import  './SearchBar.css'
import searchIcon from "../../assets/search_icon.svg"
import { useMain } from "../../context/MainContext"
import { useRef } from "preact/hooks"

const SearchBar = () => {
  
  const searchRef = useRef(null)
  
  const { searchtext, setSearchText } = useMain()
  
  const goToSearch = () => {
    searchRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  
  return (
    <div class='SearchBar' 
      ref={searchRef} 
      onclick={goToSearch}>
      <div class='cont'>
        <img src={searchIcon} />
        <input type="text" placeholder="Buscar emoliente" value={searchtext} onInput={handleChange}/>
      </div>
    </div>
  )
}

export default SearchBar