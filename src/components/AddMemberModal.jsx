import { useState } from "react"
import { FaUser, FaEnvelope, FaCalendar } from "react-icons/fa"
import styles from "../styles/common.module.css"

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
        <div className={styles.modalOverlay}>

            <div className={styles.modalBox}>

                {/* Header */}
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Add Member</h2>
                    <span onClick={onClose} className={styles.modalClose}>
                        ✕
                    </span>
                </div>

                {/* Full Name */}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        Full Name
                    </label>
                    <div className={styles.inputWrap}>
                        <FaUser className={styles.inputIcon} />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="e.g Mark Osel"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        Email
                    </label>
                    <div className={styles.inputWrap}>
                        <FaEnvelope className={styles.inputIcon} />
                        <input
                            type="email"
                            name="email"
                            placeholder="markosel@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                    </div>
                </div>

                {/* Date of Birth */}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        Date of Birth
                    </label>
                    <div className={styles.inputWrap}>
                        <FaCalendar className={styles.inputIcon} />
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                    </div>
                </div>

                {/* Gender */}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        Gender
                    </label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={styles.selectField}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Role and Ministry side by side */}
                <div className={styles.formRow}>

                    {/* Role */}
                    <div className={styles.formRowItem}>
                        <label className={styles.formLabel}>
                            Role
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className={styles.selectField}
                        >
                            <option value="">Select</option>
                            <option value="Member">Member</option>
                            <option value="Elder">Elder</option>
                            <option value="Deacon">Deacon</option>
                            <option value="Pastor">Pastor</option>
                        </select>
                    </div>

                    {/* Ministry */}
                    <div className={styles.formRowItem}>
                        <label className={styles.formLabel}>
                            Ministry
                        </label>
                        <select
                            name="ministry"
                            value={formData.ministry}
                            onChange={handleChange}
                            className={styles.selectField}
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
                <div className={styles.modalActions}>
                    <button onClick={handleSubmit} className={styles.btnSubmit}>
                        Save
                    </button>
                    <button onClick={onClose} className={styles.btnSecondary}>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddMemberModal
