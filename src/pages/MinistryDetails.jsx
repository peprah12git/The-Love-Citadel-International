import { useParams, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import MembersBanner from "../components/MembersBanner"
import MinistryMembersTable from "../components/MinistryMembersTable"
import { ministries } from "../data/ministries"

function MinistryDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const ministry = ministries.find((m) => String(m.id) === id)

    if (!ministry) {
        return (
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1 }}>
                    <Navbar />
                    <div style={{ padding: "24px" }}>
                        <p>Ministry not found.</p>
                        <button
                            onClick={() => navigate("/ministries")}
                            style={{
                                background: "#7c3aed",
                                color: "white",
                                border: "none",
                                padding: "10px 16px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            ← Back to Ministries
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Navbar />
                <div style={{ padding: "24px" }}>
                    <span
                        onClick={() => navigate("/ministries")}
                        style={{ cursor: "pointer", color: "#7c3aed", fontSize: "14px", display: "inline-block", marginBottom: "16px" }}
                    >
                        ← Back to Ministries
                    </span>

                    <MembersBanner />

                    <MinistryMembersTable ministryName={ministry.name} />
                </div>
            </div>
        </div>
    )
}

export default MinistryDetails
