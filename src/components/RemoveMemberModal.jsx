import common from "../styles/common.module.css"
import styles from "./RemoveMemberModal.module.css"

function RemoveMemberModal({ onConfirm, onCancel }) {
    return (
        <div className={common.modalOverlay}>

            <div className={styles.modalBox}>

                {/* Close */}
                <span onClick={onCancel} className={styles.closeIcon}>
                    ✕
                </span>

                {/* Warning icon */}
                <div className={styles.warningIcon}>
                    !
                </div>

                {/* Message */}
                <p className={styles.message}>
                    Are you sure you want to remove this member from the ministry
                </p>

                {/* Buttons */}
                <div className={styles.actions}>
                    <button onClick={onConfirm} className={common.btnDanger}>
                        Confirm
                    </button>
                    <button onClick={onCancel} className={common.btnSecondary}>
                        No, cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default RemoveMemberModal
