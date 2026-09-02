import { useState } from "react"
import { FaUser, FaEnvelope, FaCalendar } from "react-icons/fa"

function AddMemberModal({ onClose }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        dob: "",
        gender: "",
        role: "",
        ministry: ""
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit() {
        console.log("New Member:", formData)
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
                    <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Add Member</h2>
                    <span
                        onClick={onClose}
                        style={{ cursor: "pointer", fontSize: "18px", color: "#888" }}
                    >
                        ✕
                    </span>
                </div>

                {/* Full Name */}
                <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                        Full Name
                    </label>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #eee", borderRadius: "8px", padding: "10px 14px", gap: "10px", background: "#f9f9f9" }}>
                        <FaUser style={{ color: "#aaa" }} />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="e.g Mark Osel"
                            value={formData.fullName}
                            onChange={handleChange}
                            style={{ border: "none", outline: "none", fontSize: "14px", background: "transparent", width: "100%" }}
                        />
                    </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                        Email
                    </label>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #eee", borderRadius: "8px", padding: "10px 14px", gap: "10px", background: "#f9f9f9" }}>
                        <FaEnvelope style={{ color: "#aaa" }} />
                        <input
                            type="email"
                            name="email"
                            placeholder="markosel@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ border: "none", outline: "none", fontSize: "14px", background: "transparent", width: "100%" }}
                        />
                    </div>
                </div>

                {/* Date of Birth */}
                <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                        Date of Birth
                    </label>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #eee", borderRadius: "8px", padding: "10px 14px", gap: "10px", background: "#f9f9f9" }}>
                        <FaCalendar style={{ color: "#aaa" }} />
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            style={{ border: "none", outline: "none", fontSize: "14px", background: "transparent", width: "100%" }}
                        />
                    </div>
                </div>

                {/* Gender */}
                <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                        Gender
                    </label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #eee",
                            fontSize: "14px",
                            outline: "none",
                            background: "#f9f9f9",
                            boxSizing: "border-box"
                        }}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Role and Ministry side by side */}
                <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>

                    {/* Role */}
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                            Role
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px 14px",
                                borderRadius: "8px",
                                border: "1px solid #eee",
                                fontSize: "14px",
                                outline: "none",
                                background: "#f9f9f9",
                                boxSizing: "border-box"
                            }}
                        >
                            <option value="">Select</option>
                            <option value="Member">Member</option>
                            <option value="Elder">Elder</option>
                            <option value="Deacon">Deacon</option>
                            <option value="Pastor">Pastor</option>
                        </select>
                    </div>

                    {/* Ministry */}
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "14px", fontWeight: "500", display: "block", marginBottom: "6px" }}>
                            Ministry
                        </label>
                        <select
                            name="ministry"
                            value={formData.ministry}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "10px 14px",
                                borderRadius: "8px",
                                border: "1px solid #eee",
                                fontSize: "14px",
                                outline: "none",
                                background: "#f9f9f9",
                                boxSizing: "border-box"
                            }}
                        >
                            <option value="">Select</option>
                            <option value="Choir">Choir</option>
                            <option value="Ushering">Ushering</option>
                            <option value="Media">Media</option>
                            <option value="Prayer">Prayer</option>
                        </select>
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

export default AddMemberModal