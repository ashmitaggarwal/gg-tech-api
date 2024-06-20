const mongoose = require('mongoose');

const SenderSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    IDNumber: { type: String, required: true },
});

const RecipientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    accountNumber: { type: String, required: true },
    bank: { type: String, required: true },
});

const TransactionSchema = new mongoose.Schema({
    id: { type: String },
    date: { type: Date },
    sender: { type: SenderSchema},
    recipient: { type: RecipientSchema},
    amount: { type: Number},
    currencyCd: { type: String },
    comments: { type: String},
    status: { type: String, enum: ['COMPLETED', 'IN PROGRESS', 'REJECTED', 'PENDING'] },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
