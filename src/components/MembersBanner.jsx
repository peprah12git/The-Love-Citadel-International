import bannerImage from "../assets/church.jpg"

function MembersBanner() {
    return (
        <div style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "24px",
            height: "200px",
        }}>
            {/* Background Image */}
            <img
                src={bannerImage}
                alt="banner"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            {/* Dark overlay */}
            <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0, 0, 255, 0.4)"
            }}/>

            {/* Text */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "32px",
                transform: "translateY(-50%)",
                color: "white",
            }}>
                <h2 style={{ margin: 0, fontSize: "26px" }}>
                    Good day, Emmanuel 👋
                </h2>
                <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#e2e2e2" }}>
                    Welcome back! What's happening in church?
                </p>

                {/* Search bars */}
                <div style={{ display: "flex", gap: "16px",marginTop:"15px" }}>
                    <input
                        type="text"
                        placeholder="Search by name..."
                        style={{
                            flex: 1,
                            padding: "10px 16px",
                            borderRadius: "9px",
                            border: "none",
                            fontSize: "14px",
                            outline: "none",
                            background: "rgba(255,255,255,0.2)",
                            color: "white",
                        }}
                    />
                    <select
                        style={{
                            padding: "10px 16px",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "14px",
                            outline: "none",
                            cursor: "pointer",
                            background: "rgba(255,255,255,0.2)",
                            color: "white",
                        }}
                    >
                        <option value="">All Genders</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
            
        </div>
    )
}

export default MembersBanner