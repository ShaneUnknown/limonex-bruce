import  './Footer.css'
import tiktok from "../../assets/tiktok.svg"
import facebook from "../../assets/facebook.svg"
import whatsapp from "../../assets/whatsapp.svg"
import { vibration } from "../../utils/utils"

const Footer = () => {
  
  return (
    <div className="Footer">
      <h2>Visítanos en:</h2>
      <h3>
        El Mercado Requejo <br/>
        Ortiz Arrieta 372 - Chachapoyas
      </h3>
      
      <h2>Horario de Atención</h2>
      <h3>
        <span>Mañanas:</span>
        Lunes a Sábado <br/>
        6 am. a 10 am. <br/>
        <br/>
        <span>Tardes:</span>
        Lunes a Sábado <br/>
        5:30 pm. a 9 pm. <br/>
        <br/>
        <span>Domingos</span>
        5:30 pm. a 9 pm. <br/>
      </h3>
      
      <h2>Visita Nuestras Redes</h2>
      <div class='social'>
        <a onClick={() => vibration()} href="https://www.tiktok.com/@limonexemolientechacha">
          <img src={tiktok} />
        </a>
        <a onClick={() => vibration()} href="https://www.facebook.com/limonex.johanes">
          <img src={facebook} />
        </a>
        <a onClick={() => vibration()} href="https://wa.me/51931372806">
          <img src={whatsapp} />
        </a>
      </div>
      
      <p>
        © 2026 Limonex. Todos los derechos reservados.
      </p>
    </div>
  )
}

export default Footer