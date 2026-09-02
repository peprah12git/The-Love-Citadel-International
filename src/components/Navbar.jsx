import { FaBell, FaMoon } from "react-icons/fa"
import profilePic from "../assets/church.jpg"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navbar}>

      {/* Right side */}
      <div className={styles.actions}>

        {/* Dark mode icon */}
        <FaMoon className={styles.icon} />

        {/* Notification bell */}
        <FaBell className={styles.icon} />

        {/* Profile */}
        <div className={styles.profile}>
          <img
            src={profilePic}
            alt="profile"
            className={styles.avatarImage}
          />
          <div>
            <p className={styles.name}>Emmanuel Peprah</p>
            <p className={styles.role}>Admin</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
