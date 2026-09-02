import { useNavigate } from "react-router-dom"

function MinistryCard({ ministry }) {
    const { id, icon, iconBg, iconColor, name, members, rehearsal, lead, leadRole } = ministry
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/ministries/${id}`)}
            style={{
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #eee",
                cursor: "pointer",
            }}
        >
            {/* Icon + Members count */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    background: iconBg, display: "flex", alignItems: "center",
                    justifyContent: "center", color: iconColor, fontSize: "16px"
                }}>
                    {icon}
                </div>
                <span style={{
                    background: "#f5f5f5",
                    color: "#666",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px"
                }}>
                    {members} Members
                </span>
            </div>

            {/* Name */}
            <h3 style={{ margin: "0 0 6px 0", fontSize: "16px" }}>{name}</h3>

            {/* Rehearsal */}
            <p style={{ margin: "0 0 16px 0", fontSize: "13px", color: "#888" }}>
                Rehearsal: {rehearsal}
            </p>

            {/* Ministry Lead */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                        width: "32px", height: "32px", borderRadius: "50%",
                        background: "#e0e7ff", display: "flex", alignItems: "center",
                        justifyContent: "center", fontWeight: "500", fontSize: "13px", color: "#7c3aed"
                    }}>
                        {lead.charAt(0)}
                    </div>
                    <div>
                        <p style={{ margin: 0, fontSize: "13px", fontWeight: "500" }}>{lead}</p>
                        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>{leadRole}</p>
                    </div>
                </div>
                <span style={{ color: "#aaa", fontSize: "16px" }}>→</span>
            </div>
        </div>
    )
}

export default MinistryCard
