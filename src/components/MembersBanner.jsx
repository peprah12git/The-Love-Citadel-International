import bannerImage from "../assets/church.jpg"
import styles from "./MembersBanner.module.css"

function MembersBanner() {
    return (
        <div className={styles.banner}>
            {/* Background Image */}
            <img
                src={bannerImage}
                alt="banner"
                className={styles.image}
            />

            {/* Dark overlay */}
            <div className={styles.overlay} />

            {/* Text */}
            <div className={styles.text}>
                <h2 className={styles.greeting}>
                    Good day, Emmanuel 👋
                </h2>
                <p className={styles.subtext}>
                    Welcome back! What's happening in church?
                </p>

                {/* Search bars */}
                <div className={styles.searchRow}>
                    <input
                        type="text"
                        placeholder="Search by name..."
                        className={styles.searchInput}
                    />
                    <select className={styles.genderSelect}>
                        <option value="">All Genders</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default MembersBanner
