import { useState } from "react"
import AddMemberModal from "./AddMemberModal"
import { members } from "../data/members"
import styles from "../styles/common.module.css"

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
        <div className={styles.card}>

            {/* Header */}
            <div className={styles.pageHeader}>
                <h2 className={styles.headingNoMargin}>Members</h2>
                <button onClick={() => setShowModal(true)} className={styles.btnPrimary}>
                    + Add Member
                </button>
            </div>

            {/* Table */}
            <table className={styles.table}>
                <thead>
                    <tr className={styles.theadRow}>
                        <th className={styles.thCheckbox}>
                            <input
                                type="checkbox"
                                checked={selectedAll}
                                onChange={toggleAll}
                            />
                        </th>
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>Role</th>
                        <th className={styles.th}>Ministry</th>
                        <th className={styles.th}>Gender</th>
                        <th className={styles.th}>Actions</th>
                        <th className={styles.th}>Date of Birth</th>
                        <th className={styles.th}>Start date</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id} className={styles.tr}>

                            {/* Row checkbox */}
                            <td className={styles.td}>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(member.id)}
                                    onChange={() => toggleOne(member.id)}
                                />
                            </td>

                            {/* Name + Avatar */}
                            <td className={styles.nameCell}>
                                <div className={styles.avatar}>
                                    {member.name.charAt(0)}
                                </div>
                                <div>
                                    <p className={styles.nameText}>{member.name}</p>
                                    <p className={styles.mutedSmall}>{member.email}</p>
                                </div>
                            </td>

                            <td className={styles.td}>{member.role}</td>
                            <td className={styles.td}>{member.joined}</td>

                            {/* Gender Badge */}
                            <td className={styles.td}>
                                <span className={styles.badge}>
                                    {member.gender}
                                </span>
                            </td>

                            {/* Actions */}
                            <td className={styles.tdRelative}>
                                <span
                                    onClick={() => setOpenMenu(openMenu === member.id ? null : member.id)}
                                    className={styles.actionsTrigger}
                                >
                                    ⋮
                                </span>

                                {/* Dropdown menu */}
                                {openMenu === member.id && (
                                    <div className={styles.dropdownMenu}>
                                        <p
                                            onClick={() => { alert("Assign Role clicked") }}
                                            className={styles.dropdownItem}
                                        >
                                            Assign Role
                                        </p>
                                        <p
                                            onClick={() => { alert("Add to Ministry clicked") }}
                                            className={styles.dropdownItem}
                                        >
                                            Add to Ministry
                                        </p>
                                        <p
                                            onClick={() => { alert("Deactivate clicked") }}
                                            className={styles.dropdownItemDanger}
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
            <div className={styles.pagination}>
                <span className={styles.muted}>Showing 1-10 of 1000</span>
                <div className={styles.pageNumbers}>
                    {[1, 2, 3, 4, 5].map((p) => (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={page === p ? styles.pageBtnActive : styles.pageBtn}
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
