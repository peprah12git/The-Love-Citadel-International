import { useState } from "react"
import AddMemberModal from "./AddMemberModal"
import { members } from "../data/members"

function MembersTable() {
    const [page, setPage] = useState(1)
    const [selectedAll, setSelectedAll] = useState(false)
    const [selected, setSelected] = useState([])
    const [openMenu, setOpenMenu] = useState(null)
    const [showModal, setShowModal] = useState(false)

    function toggleAll() {
        if (selectedAll) {
            setSelected([])
        } else {
            setSelected(members.map(m => m.id))
        }
        setSelectedAll(!selectedAll)
    }

    function toggleOne(id) {
        if (selected.includes(id)) {
            setSelected(selected.filter(s => s !== id))
        } else {
            setSelected([...selected, id])
        }
    }

    return (
        <div style={{ background: "white", borderRadius: "12px", padding: "24px", border: "1px solid #eee" }}>
            
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h2 style={{ margin: 0 }}>Members</h2>
                <button 
                onClick={()=> setShowModal(true)}
                
                style={{
                    background: "#7c3aed",
                    color: "white",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px"
                }}>
                    + Add Member
                </button>
            </div>

            {/* Table */}
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid #eee", color: "#888" }}>
                        <th style={{ padding: "10px 0", width: "40px" }}>
                            <input 
                                type="checkbox" 
                                checked={selectedAll}
                                onChange={toggleAll}
                            />
                        </th>
                        <th style={{ textAlign: "left", padding: "10px 0" }}>Name</th>
                        <th style={{ textAlign: "left", padding: "10px 0" }}>Role</th>
                        <th style={{ textAlign: "left", padding: "10px 0" }}>Ministry</th>
                        <th style={{ textAlign: "left", padding: "10px 0" }}>Gender</th>
                        <th style={{ textAlign: "left", padding: "10px 0" }}>Actions</th>
                        <th style={{ textAlign: "left", padding: "10px 0" }}>Date of Birth</th>
                        <th style={{ textAlign: "left", padding: "10px 0" }}>Start date</th>
                         
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id} style={{ borderBottom: "1px solid #f5f5f5" }}>

                             {/* Row checkbox */}
                            <td style={{ padding: "12px 0" }}>
                                <input 
                                    type="checkbox"
                                    checked={selected.includes(member.id)}
                                    onChange={() => toggleOne(member.id)}
                                />
                            </td>
                            
                            {/* Name + Avatar */}
                            <td style={{ padding: "12px 0", display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{
                                    width: "36px", height: "36px", borderRadius: "50%",
                                    background: "#e0e7ff", display: "flex", alignItems: "center",
                                    justifyContent: "center", fontWeight: "500", color: "#7c3aed"
                                }}>
                                    {member.name.charAt(0)}
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: "500" }}>{member.name}</p>
                                    <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>{member.email}</p>
                                </div>
                            </td>

                            <td style={{ padding: "12px 0" }}>{member.role}</td>
                            <td style={{ padding: "12px 0" }}>{member.joined}</td>

                            {/* Gender Badge */}
                            <td style={{ padding: "12px 0" }}>
                                <span style={{
                                    background: "#ede9fe",
                                    color: "#7c3aed",
                                    padding: "4px 12px",
                                    borderRadius: "20px",
                                    fontSize: "12px"
                                }}>
                                    {member.gender}
                                </span>
                            </td>

                                 {/* Actions */}
                            <td style={{ padding: "12px 0", position: "relative" }}>
                                <span
                                    onClick={() => setOpenMenu(openMenu === member.id ? null : member.id)}
                                    style={{ cursor: "pointer", fontSize: "18px", padding: "4px 8px" }}
                                >
                                    ⋮
                                </span>

                                {/* Dropdown menu */}
                                {openMenu === member.id && (
                                    <div style={{
                                        position: "absolute",
                                        right: 0,
                                        top: "40px",
                                        background: "white",
                                        border: "1px solid #eee",
                                        borderRadius: "8px",
                                        padding: "8px 0",
                                        zIndex: 100,
                                        minWidth: "160px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                    }}>
                                        <p
                                            onClick={() => { alert("Assign Role clicked") }}
                                            style={{ margin: 0, padding: "10px 16px", cursor: "pointer", fontSize: "14px" }}
                                            onMouseEnter={e => e.target.style.background = "#f5f5f5"}
                                            onMouseLeave={e => e.target.style.background = "white"}
                                        >
                                            Assign Role
                                        </p>
                                        <p
                                            onClick={() => { alert("Add to Ministry clicked") }}
                                            style={{ margin: 0, padding: "10px 16px", cursor: "pointer", fontSize: "14px" }}
                                            onMouseEnter={e => e.target.style.background = "#f5f5f5"}
                                            onMouseLeave={e => e.target.style.background = "white"}
                                        >
                                            Add to Ministry
                                        </p>
                                        <p
                                            onClick={() => { alert("Deactivate clicked") }}
                                            style={{ margin: 0, padding: "10px 16px", cursor: "pointer", fontSize: "14px", color: "red" }}
                                            onMouseEnter={e => e.target.style.background = "#fff5f5"}
                                            onMouseLeave={e => e.target.style.background = "white"}
                                        >
                                            Deactivate
                                        </p>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", fontSize: "14px" }}>
                <span style={{ color: "#888" }}>Showing 1-10 of 1000</span>
                <div style={{ display: "flex", gap: "8px" }}>
                    {[1,2,3,4,5].map((p) => (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            style={{
                                width: "32px", height: "32px", borderRadius: "6px",
                                border: "1px solid #eee", cursor: "pointer",
                                background: page === p ? "#7c3aed" : "white",
                                color: page === p ? "white" : "#333",
                            }}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>
            {showModal && <AddMemberModal onClose={() => setShowModal(false)} />}

        </div>
    )
}

export default MembersTable