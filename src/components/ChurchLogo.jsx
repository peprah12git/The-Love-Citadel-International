import logo from "../assets/logo.png"
import { FaHome } from "react-icons/fa"

function ChurchLogo(){
    return(
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
  
 
        <img 
            src={logo} 
            alt="logo" 
            style={{ width: "48px", height: "48px" }} 
        />

        {/* Text */}
        <div>
            <h3 style={{ margin: 0, color:"#1e1e2d", fontSize: "18px", fontWeight:"semi-bold" }}>
            The Love Citadel
            </h3>
            <span style={{ fontSize: "12px", color:"#1e1e2d",  fontWeight:"bold" }}>
            International Worship Centre
            </span>
        </div>

        </div>
    )
}
export default ChurchLogo