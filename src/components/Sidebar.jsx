import { FaChartPie, FaUsers, FaCog } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import { IoIosNotifications } from "react-icons/io"
import { GrGallery } from "react-icons/gr"
import ChurchLogo from "./ChurchLogo.jsx"
import { useNavigate, useLocation } from "react-router-dom"

function Sidebar(){
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        { name: "Dashboard", icon: <FaChartPie />, path: "/" },
        { name: "Members", icon: <FaUsers />, path: "/members" },
        { name: "Ministries", icon: <FaPeopleGroup />, path: "/ministries" },
        { name: "Gallery", icon: <GrGallery />, path: "/gallery" },
        { name: "Notifications", icon: <IoIosNotifications />, badge: 1, path: "/notifications" },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <div style={{ width:"288px", height:"100vh",  background:"#ffffff",color:"#1e1e2d", padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            
            <div>
                <ChurchLogo/>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            style={{
                                marginBottom: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "10px 14px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                justifyContent: "space-between",
                                background: isActive(item.path) ? "#ede9fe" : "transparent",
                                color: isActive(item.path) ? "#7c3aed" : "#1e1e2d",
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