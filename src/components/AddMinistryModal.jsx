import { useState } from "react"
import { FaPeopleGroup } from "react-icons/fa6"
import { FaUser, FaAlignLeft } from "react-icons/fa"
import styles from "../styles/common.module.css"
import localStyles from "./AddMinistryModal.module.css"

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
        <div className={styles.modalOverlay}>

            <div className={styles.modalBox}>

                {/* Header */}
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Add Ministry</h2>
                    <span onClick={onClose} className={styles.modalClose}>
                        ✕
                    </span>
                </div>

                {/* Ministry Name */}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        Ministry Name
                    </label>
                    <div className={styles.inputWrap}>
                        <FaPeopleGroup className={styles.inputIcon} />
                        <input
                            type="text"
                            name="name"
                            placeholder="e.g Choir"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                    </div>
                </div>

                {/* Leader */}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        Leader
                    </label>
                    <div className={styles.inputWrap}>
                        <FaUser className={styles.inputIcon} />
                        <input
                            type="text"
                            name="leader"
                            placeholder="e.g Mark Osel"
                            value={formData.leader}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className={localStyles.descriptionGroup}>
                    <label className={styles.formLabel}>
                        Description
                    </label>
                    <div className={localStyles.textareaWrap}>
                        <FaAlignLeft className={localStyles.textareaIcon} />
                        <textarea
                            name="description"
                            placeholder="What does this ministry do?"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            className={localStyles.textareaField}
                        />
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

export default AddMinistryModal
