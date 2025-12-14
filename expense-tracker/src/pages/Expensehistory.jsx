import React, { useState } from "react";
import ExpenseShow from "./ExpenseShow";
import { Pie } from "react-chartjs-2";
import "../assets/css/home.css";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

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

    const chartData = {
        labels: expenses.map(exp => exp.item),
        datasets: [
            {
                label: "Expense Amount",
                data: expenses.map(exp => exp.amount),
                backgroundColor: [
                    "#6d28d9",
                    "#4f46e5",
                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444"
                ],
                borderColor: "#fff",
                borderWidth: 2
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "bottom" },
            title: { display: true, text: "Expense Distribution" }
        }
    };

    return (
        <>
            <h1 className="expensetitle">Expense History</h1>

            <div className="expenseshow-container">
                <div className="history-layout">

                    <div className="expense-section">
                        <ExpenseShow
                            expenses={expenses}
                            deleteExpense={deleteExpense}
                            setEditingExpense={setEditingExpense}
                        />
                    </div>

                    <div className="graph-section">
                        {editingExpense ? (
                            <div className="edit-form">
                                <h2>Edit Expense</h2>

                                <input
                                    type="text"
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
                        ) : (
                            <Pie data={chartData} options={chartOptions} />
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Expensehistory;
