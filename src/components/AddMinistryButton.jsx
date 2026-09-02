import { useState } from "react"
import AddMinistryModal from "./AddMinistryModal"

function AddMinistryButton() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                style={{
                    background: "#7c3aed",
                    color: "white",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px"
                }}
            >
                + Add Ministry
            </button>

            {showModal && <AddMinistryModal onClose={() => setShowModal(false)} />}
        </>
    )
}

export default AddMinistryButton
