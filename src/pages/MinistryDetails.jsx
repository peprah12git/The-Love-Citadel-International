import { useParams, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import MembersBanner from "../components/MembersBanner"
import MinistryMembersTable from "../components/MinistryMembersTable"
import { ministries } from "../data/ministries"
import common from "../styles/common.module.css"
import styles from "./MinistryDetails.module.css"

function MinistryDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const ministry = ministries.find((m) => String(m.id) === id)

    if (!ministry) {
        return (
            <div className={common.pageShell}>
                <Sidebar />
                <div className={common.pageMain}>
                    <Navbar />
                    <div className={common.pageContent}>
                        <p>Ministry not found.</p>
                        <button onClick={() => navigate("/ministries")} className={common.btnPrimary}>
                            ← Back to Ministries
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={common.pageShell}>
            <Sidebar />
            <div className={common.pageMain}>
                <Navbar />
                <div className={common.pageContent}>
                    <span onClick={() => navigate("/ministries")} className={styles.backLink}>
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
