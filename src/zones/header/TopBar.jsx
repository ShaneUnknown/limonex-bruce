import logoLimonex from "../../assets/logo_limonex.png"
import  './TopBar.css'

const TopBar = () => {
  return (
    <div className="TopBar">
      <img src={logoLimonex} />
      <div class='cont'>
        <h1>Emolientes Clásicos y Medicinales</h1>
      </div>
    </div>
  )
}

export default TopBar