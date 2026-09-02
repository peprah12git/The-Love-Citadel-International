import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MembersBanner from "../components/MembersBanner";
import MembersTable from "../components/MembersTable";
import styles from "../styles/common.module.css"

function Members(){
    const [searchName, setSearchName] = useState("")
    const [searchGender, setSearchGender] = useState("")

    return (
        <div className={styles.pageShell}>
            <Sidebar />
            <div className={styles.pageMain}>
                <Navbar />
                <div className={styles.pageContent}>
                    <MembersBanner />
                    <MembersTable/>
                </div>
            </div>
        </div>
    )
}
export default Members;
