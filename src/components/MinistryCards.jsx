import MinistryCard from "./MinistryCard"
import { ministries } from "../data/ministries"
import styles from "./MinistryCards.module.css"

function MinistryCards() {
    return (
        <div className={styles.grid}>
            {ministries.map((ministry) => (
                <MinistryCard key={ministry.id} ministry={ministry} />
            ))}
        </div>
    )
}

export default MinistryCards
