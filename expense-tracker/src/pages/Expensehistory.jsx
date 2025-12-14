import React, { useState } from "react";
import "../assets/css/home.css";

function Expensehistory() {

    const [expenses, setExpenses] = useState([
        { id: 1, item: "Food", amount: 500, date: "2025-01-10" },
        { id: 2, item: "Travel", amount: 1200, date: "2025-01-11" },
        { id: 3, item: "Shopping", amount: 2000, date: "2025-01-12" }
    ]);

    const [editingExpense, setEditingExpense] = useState(null);

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
    };
    const saveEdit = () => {
        setExpenses(
            expenses.map(exp =>
                exp.id === editingExpense.id ? editingExpense : exp
            )
        );
        setEditingExpense(null);
    };

    return (
        <div className="expenseshow-container">
            <h1 className="expensetitle">Expense History</h1>

            {expenses.length === 0 && (
                <p className="empty-state">No expenses added yet.</p>
            )}

            {!editingExpense && expenses.length > 0 && (
                <table className="expense-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount (₹)</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenses.map((exp) => (
                            <tr key={exp.id}>
                                <td>{exp.item}</td>
                                <td>₹{exp.amount}</td>
                                <td>{exp.date}</td>
                                <td>
                                    <button
                                        className="add-btn"
                                        onClick={() =>
                                            setEditingExpense({ ...exp })
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteExpense(exp.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {editingExpense && (
                <div className="edit-form">
                    <h2>Edit Expense</h2>

                    <input
                        type="text"
                        placeholder="Item Name"
                        value={editingExpense.item}
                        onChange={(e) =>
                            setEditingExpense({
                                ...editingExpense,
                                item: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        value={editingExpense.amount}
                        onChange={(e) =>
                            setEditingExpense({
                                ...editingExpense,
                                amount: Number(e.target.value)
                            })
                        }
                    />

                    <input
                        type="date"
                        value={editingExpense.date}
                        onChange={(e) =>
                            setEditingExpense({
                                ...editingExpense,
                                date: e.target.value
                            })
                        }
                    />

                    <div className="button-group">
                        <button className="add-btn" onClick={saveEdit}>
                            Update
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() => setEditingExpense(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Expensehistory;
