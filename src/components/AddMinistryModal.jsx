import { useState } from "react"
import { FaPeopleGroup } from "react-icons/fa6"
import { FaUser, FaAlignLeft } from "react-icons/fa"

function AddMinistryModal({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        leader: "",
        description: ""
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit() {
        console.log("New Ministry:", formData)
        onClose()
    }

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
        }}>

            <div style={{
                background: "white",
                borderRadius: "16px",
                padding: "32px",
                width: "420px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}>

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                    <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Add Ministry</h2>
                    <span
                        onClick={onClose}
                        style={{ cursor: "pointer", fontSize: "18px", color: "#888" }}
                    >
                        ✕
                    </span>
                </div>

                {/* Ministry Name */}
                <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                        Ministry Name
                    </label>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #eee", borderRadius: "8px", padding: "10px 14px", gap: "10px", background: "#f9f9f9" }}>
                        <FaPeopleGroup style={{ color: "#aaa" }} />
                        <input
                            type="text"
                            name="name"
                            placeholder="e.g Choir"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ border: "none", outline: "none", fontSize: "14px", background: "transparent", width: "100%" }}
                        />
                    </div>
                </div>

                {/* Leader */}
                <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                        Leader
                    </label>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #eee", borderRadius: "8px", padding: "10px 14px", gap: "10px", background: "#f9f9f9" }}>
                        <FaUser style={{ color: "#aaa" }} />
                        <input
                            type="text"
                            name="leader"
                            placeholder="e.g Mark Osel"
                            value={formData.leader}
                            onChange={handleChange}
                            style={{ border: "none", outline: "none", fontSize: "14px", background: "transparent", width: "100%" }}
                        />
                    </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: "24px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                        Description
                    </label>
                    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #eee", borderRadius: "8px", padding: "10px 14px", gap: "10px", background: "#f9f9f9" }}>
                        <FaAlignLeft style={{ color: "#aaa", marginTop: "3px" }} />
                        <textarea
                            name="description"
                            placeholder="What does this ministry do?"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            style={{ border: "none", outline: "none", fontSize: "14px", background: "transparent", width: "100%", resize: "none", fontFamily: "inherit" }}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px" }}>
                    <button
                        onClick={handleSubmit}
                        style={{
                            padding: "10px 24px",
                            borderRadius: "8px",
                            border: "none",
                            background: "#7c3aed",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "500"
                        }}
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        style={{
                            padding: "10px 24px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            background: "white",
                            cursor: "pointer",
                            fontSize: "14px"
                        }}
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddMinistryModal
