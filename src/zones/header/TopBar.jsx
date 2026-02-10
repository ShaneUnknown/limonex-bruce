import logoLimonex from "../../assets/logo_limonex.png"
import  './TopBar.css'

const TopBar = () => {
  return (
    <div class="TopBar">
      <img src={logoLimonex} />
      <div class='cont'>
        <div class='marquee-track'>
          <h1>Emolientes Clásicos, Especiales y Medicinales.</h1>
          <h1>Emolientes Clásicos, Especiales y Medicinales.</h1>
        </div>
      </div>
    </div>
  )
}

export default TopBar