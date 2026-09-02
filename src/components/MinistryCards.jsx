import MinistryCard from "./MinistryCard"
import { ministries } from "../data/ministries"

function MinistryCards() {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
        }}>
            {ministries.map((ministry) => (
                <MinistryCard key={ministry.id} ministry={ministry} />
            ))}
        </div>
    )
}

export default MinistryCards
