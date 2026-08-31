import { FaBell, FaMoon } from "react-icons/fa"
import profilePic from "../assets/church.jpg"

function Navbar() {
  return (
    <div style={{ 
      height: "60px", 
      background: "white", 
      borderBottom: "1px solid #eee", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "flex-end", 
      padding: "0 24px" 
    }}>
      
      

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        {/* Dark mode icon */}
        <FaMoon style={{ fontSize: "18px", cursor: "pointer", color: "#888" }} />

        {/* Notification bell */}
        <FaBell style={{ fontSize: "18px", cursor: "pointer", color: "#888" }} />

        {/* Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src={profilePic} 
            alt="profile" 
            style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} 
          />
          <div>
            <p style={{ margin: 0, fontWeight: "600", fontSize: "14px" }}>Emmanuel Peprah</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Admin</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar