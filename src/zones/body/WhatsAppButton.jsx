import  './WhatsAppButton.css'
import whatsAppButton from "../../assets/whatsapp_button.svg"
import { vibration } from "../../utils/utils"

const WhatsAppButton = () => {
  
  return (
    <div className="WhatsAppButton">
      <a onClick={() => vibration()} href="https://wa.me/51931372806">
        <img src={whatsAppButton} />
      </a>
    </div>
  )
}

export default WhatsAppButton