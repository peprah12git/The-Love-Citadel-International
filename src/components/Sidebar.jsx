import { FaChartPie, FaUsers, FaCog } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import { IoIosNotifications } from "react-icons/io"
import { GrGallery } from "react-icons/gr"
import ChurchLogo from "./ChurchLogo.jsx"
import { useState } from "react"

function Sidebar(){
    const [active, setActive] = useState("Dashboard")

    const menuItems = [
        { name: "Dashboard", icon: <FaChartPie /> },
        { name: "Members", icon: <FaUsers /> },
        { name: "Ministries", icon: <FaPeopleGroup /> },
        { name: "Gallery", icon: <GrGallery /> },
        { name: "Notifications", icon: <IoIosNotifications />, badge: 1 },
    ]

    return (
        <div style={{ width:"288px", height:"100vh",  background:"#ffffff",color:"#1e1e2d", padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            
            <div>
                <ChurchLogo/>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            style={{
                                marginBottom: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "10px 14px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                justifyContent: "space-between",
                                background: active === item.name ? "#ede9fe" : "transparent",
                                color: active === item.name ? "#7c3aed" : "#1e1e2d",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                {item.icon} {item.name}
                            </div>
                            {item.badge && (
                                <span style={{
                                    background: "#a78bfa",
                                    color: "white",
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "11px"
                                }}>
                                    {item.badge}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Settings at the bottom */}
            <li
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    listStyle: "none",
                    color: "white"
                }}
            >
                <FaCog /> Settings
            </li>

        </div>
    )
}
export default Sidebar;