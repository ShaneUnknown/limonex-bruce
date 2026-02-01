import DefaultList from "./DefaultList"
import SearchList from "./SearchList"
import { useMain } from "../../context/MainContext"
import './ListBody.css'

const ListBody = () => {
  const { searchtext } = useMain()
  return (
    <div class='ListBody'>
    {
      searchtext.length > 0 ?
      <SearchList /> :
      <DefaultList />
    }
    </div>
  )
}

export default ListBody