function RemoveMemberModal({ onConfirm, onCancel }) {
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
                width: "360px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                position: "relative",
                textAlign: "center",
            }}>

                {/* Close */}
                <span
                    onClick={onCancel}
                    style={{ position: "absolute", top: "16px", right: "16px", cursor: "pointer", fontSize: "18px", color: "#888" }}
                >
                    ✕
                </span>

                {/* Warning icon */}
                <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    border: "2px solid #dc2626", display: "flex", alignItems: "center",
                    justifyContent: "center", margin: "0 auto 20px", color: "#dc2626",
                    fontSize: "22px", fontWeight: "700"
                }}>
                    !
                </div>

                {/* Message */}
                <p style={{ margin: "0 0 24px 0", fontSize: "15px", color: "#333" }}>
                    Are you sure you want to remove this member from the ministry
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <button
                        onClick={onConfirm}
                        style={{
                            padding: "10px 24px",
                            borderRadius: "8px",
                            border: "none",
                            background: "#dc2626",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "500"
                        }}
                    >
                        Confirm
                    </button>
                    <button
                        onClick={onCancel}
                        style={{
                            padding: "10px 24px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            background: "white",
                            cursor: "pointer",
                            fontSize: "14px"
                        }}
                    >
                        No, cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default RemoveMemberModal
