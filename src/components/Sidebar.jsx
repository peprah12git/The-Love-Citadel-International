import { FaChartPie, FaUsers, FaCog } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import { IoIosNotifications } from "react-icons/io"
import { GrGallery } from "react-icons/gr"
import ChurchLogo from "./ChurchLogo.jsx"
import { useNavigate, useLocation } from "react-router-dom"
import styles from "./Sidebar.module.css"

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
        <div className={styles.sidebar}>

            <div>
                <ChurchLogo/>
                <ul className={styles.menu}>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            className={`${styles.navItem} ${isActive(item.path) ? styles.navItemActive : ""}`}
                        >
                            <div className={styles.navItemLabel}>
                                {item.icon} {item.name}
                            </div>
                            {item.badge && (
                                <span className={styles.badge}>
                                    {item.badge}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Settings at the bottom */}
            <li className={styles.settings}>
                <FaCog /> Settings
            </li>

        </div>
    )
}
export default Sidebar;
