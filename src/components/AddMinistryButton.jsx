import { useState } from "react"
import AddMinistryModal from "./AddMinistryModal"
import styles from "../styles/common.module.css"

function AddMinistryButton() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)} className={styles.btnPrimary}>
                + Add Ministry
            </button>

            {showModal && <AddMinistryModal onClose={() => setShowModal(false)} />}
        </>
    )
}

export default AddMinistryButton
