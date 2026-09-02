import logo from "../assets/logo.png"
import styles from "./ChurchLogo.module.css"

function ChurchLogo(){
    return(
        <div className={styles.logo}>
            <img
                src={logo}
                alt="logo"
                className={styles.image}
            />

            {/* Text */}
            <div>
                <h3 className={styles.name}>
                    The Love Citadel
                </h3>
                <span className={styles.tagline}>
                    International Worship Centre
                </span>
            </div>
        </div>
    )
}
export default ChurchLogo
