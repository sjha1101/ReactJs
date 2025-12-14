import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css";
import logoutImg from "../assets/images/logout-icon.png";

function Home() {
    const [item, setItem] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        navigate("/login");
    };

    const saveExpense = () => {
        if (!item || !amount || !date) {
            alert("Please fill all fields!");
            return;
        }

        console.log({
            item,
            amount,
            date
        });

        setItem("");
        setAmount("");
        setDate("");

        navigate("/history");
    };

    return (
        <div className="container">

            <div className="logout-container" onClick={handleLogout}>
                <img src={logoutImg} className="logout-icon" alt="logout-icon" />
            </div>

            <div className="logout-title">
                <h1 className="title">Add New Expense</h1>
            </div>

            <div className="form-grid">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
            </div>

            <div className="form-grid">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div className="form-grid">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="button-group">
                <button className="add-btn" onClick={saveExpense}>
                    Add Expense
                </button>
            </div>

        </div>
    );
}

export default Home;
