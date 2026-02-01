import DefaultList from "./DefaultList"
import SearchList from "./SearchList"
import { useMain } from "../../context/MainContext"

const ListBody = () => {
  const { searchtext } = useMain()
  return (
    <>
    {
      searchtext.length > 0 ?
      <SearchList /> :
      <DefaultList />
    }
    </>
  )
}

export default ListBody