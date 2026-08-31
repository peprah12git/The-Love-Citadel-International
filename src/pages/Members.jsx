import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MembersBanner from "../components/MembersBanner";
import MembersTable from "../components/MembersTable";

function Members(){
    const [searchName, setSearchName] = useState("")
    const [searchGender, setSearchGender] = useState("")

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Navbar />
                <div style={{ padding: "24px" }}>
                    <MembersBanner />
                    <MembersTable/>
                </div>
                
            </div>
        </div>
    )
}
export default Members;