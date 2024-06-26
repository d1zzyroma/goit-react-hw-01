import css from "../TransactionHistory/TransactionHistory.module.css"
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr>
                    <th className={css.thHead}>Type</th>
                    <th className={css.thHead}>Amount</th>
                    <th className={css.thHead}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tableBody}>
                {items.map((element) => (
                    <tr key={element.id} className={css.tableLine}>
                        <td className={css.td}>{element.type}</td>
                        <td className={css.td}>{element.amount}</td>
                        <td className={css.td}>{element.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransactionHistory;
