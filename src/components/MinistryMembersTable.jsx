import { useState } from "react"
import { members as allMembers } from "../data/members"
import AddMemberModal from "./AddMemberModal"
import RemoveMemberModal from "./RemoveMemberModal"
import styles from "../styles/common.module.css"

function MinistryMembersTable({ ministryName }) {
    const [removedIds, setRemovedIds] = useState([])
    const members = allMembers.filter((m) => m.ministry === ministryName && !removedIds.includes(m.id))

    const [page, setPage] = useState(1)
    const [selectedAll, setSelectedAll] = useState(false)
    const [selected, setSelected] = useState([])
    const [openMenu, setOpenMenu] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [memberToRemove, setMemberToRemove] = useState(null)

    function handleConfirmRemove() {
        setRemovedIds([...removedIds, memberToRemove.id])
        setSelected(selected.filter((id) => id !== memberToRemove.id))
        setMemberToRemove(null)
    }

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
                <h2 className={styles.headingNoMargin}>{ministryName} Member{members.length !== 1 ? "s" : ""}</h2>
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
                        <th className={styles.th}>Start Date</th>
                        <th className={styles.th}>Gender</th>
                        <th className={styles.th}>Date Of Birth</th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.length === 0 && (
                        <tr>
                            <td colSpan={6} className={styles.emptyCell}>
                                No members in this ministry yet.
                            </td>
                        </tr>
                    )}

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

                            <td className={styles.td}>{member.joined}</td>

                            {/* Gender Badge */}
                            <td className={styles.td}>
                                <span className={styles.badge}>
                                    {member.gender}
                                </span>
                            </td>

                            <td className={styles.td}>{member.dob}</td>

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
                                            onClick={() => { alert("View clicked") }}
                                            className={styles.dropdownItem}
                                        >
                                            View
                                        </p>
                                        <p
                                            onClick={() => { setMemberToRemove(member); setOpenMenu(null) }}
                                            className={styles.dropdownItemDanger}
                                        >
                                            Remove Member
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
                <span className={styles.muted}>Showing {members.length === 0 ? 0 : 1}-{members.length} of {members.length}</span>
                <div className={styles.pageNumbers}>
                    {[1].map((p) => (
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

            {memberToRemove && (
                <RemoveMemberModal
                    onConfirm={handleConfirmRemove}
                    onCancel={() => setMemberToRemove(null)}
                />
            )}

        </div>
    )
}

export default MinistryMembersTable
