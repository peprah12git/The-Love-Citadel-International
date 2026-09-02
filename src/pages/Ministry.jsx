import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MembersBanner from "../components/MembersBanner";
import AddMinistryButton from "../components/AddMinistryButton";
import MinistryCards from "../components/MinistryCards";
import styles from "../styles/common.module.css"

function Ministry(){
    const [searchName, setSearchName] = useState("")

    return (
        <div className={styles.pageShell}>
            <Sidebar />
            <div className={styles.pageMain}>
                <Navbar />
                <div className={styles.pageContent}>
                    <MembersBanner />
                    <div className={styles.pageHeader}>
                        <h2 className={styles.headingNoMargin}>Ministries</h2>
                        <AddMinistryButton />
                    </div>
                    <MinistryCards />
                </div>
            </div>
        </div>
    )
}
export default Ministry;
