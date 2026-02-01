import TopBar from "./zones/header/TopBar"
import SearchBar from "./zones/header/SearchBar"
import CategoryBar from "./zones/header/CategoryBar"
import ListBody from "./zones/body/ListBody"

import  './App.css'



const App = () => {
  return (
    <div className="App">
      <TopBar />
      <SearchBar />
      <CategoryBar />
      <ListBody />
    </div>
  )
}

export default App