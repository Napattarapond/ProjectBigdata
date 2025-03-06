const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    type: { type: String, required: true }, // Income หรือ Expense
    amount: { type: Number, required: true },
    description: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);