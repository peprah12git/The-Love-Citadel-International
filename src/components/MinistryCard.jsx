import { useNavigate } from "react-router-dom"
import styles from "./MinistryCard.module.css"

function MinistryCard({ ministry }) {
    const { id, icon, iconBg, iconColor, name, members, rehearsal, lead, leadRole } = ministry
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/ministries/${id}`)} className={styles.card}>
            {/* Icon + Members count */}
            <div className={styles.topRow}>
                {/* iconBg/iconColor come from data, so they stay inline */}
                <div className={styles.iconWrap} style={{ background: iconBg, color: iconColor }}>
                    {icon}
                </div>
                <span className={styles.memberCount}>
                    {members} Members
                </span>
            </div>

            {/* Name */}
            <h3 className={styles.name}>{name}</h3>

            {/* Rehearsal */}
            <p className={styles.rehearsal}>
                Rehearsal: {rehearsal}
            </p>

            {/* Ministry Lead */}
            <div className={styles.leadRow}>
                <div className={styles.leadInfo}>
                    <div className={styles.leadAvatar}>
                        {lead.charAt(0)}
                    </div>
                    <div>
                        <p className={styles.leadName}>{lead}</p>
                        <p className={styles.leadRole}>{leadRole}</p>
                    </div>
                </div>
                <span className={styles.arrow}>→</span>
            </div>
        </div>
    )
}

export default MinistryCard
