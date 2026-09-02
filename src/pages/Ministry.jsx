import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MembersBanner from "../components/MembersBanner";
import AddMinistryButton from "../components/AddMinistryButton";
import MinistryCards from "../components/MinistryCards";

function Ministry(){
    const [searchName, setSearchName] = useState("")

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Navbar />
                <div style={{ padding: "24px" }}>
                    <MembersBanner />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <h2 style={{ margin: 0 }}>Ministries</h2>
                        <AddMinistryButton />
                    </div>
                    <MinistryCards />

                </div>

            </div>
        </div>
    )
}
export default Ministry;