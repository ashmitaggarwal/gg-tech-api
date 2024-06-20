const Transaction = require('../models/Transaction');

const getTransactions = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;

        let transactions;

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);

            transactions = await Transaction.find({
                date: { $gte: start, $lte: end },
                status: { $in: ['COMPLETED', 'IN PROGRESS', 'REJECTED'] },
            }).sort({ date: 1 });
        } else {
            // transactions = await Transaction.find({
            //     status: { $in: ['COMPLETED', 'IN PROGRESS', 'REJECTED'] },
            // }).sort({ date: 1 });
            transactions = [
                {
                    id: "1",
                    date: new Date(1639502071000),
                    sender: {
                        firstName: "John",
                        lastName: "Smith",
                        dateOfBirth: new Date("1970-01-23"),
                        IDNumber: "100001"
                    },
                    recipient: {
                        firstName: "Jane",
                        lastName: "Doe",
                        email: "janedoe@company.com",
                        accountNumber: "200001",
                        bank: "TD"
                    },
                    amount: 100.00,
                    currencyCd: "CAD",
                    comments: "Utility bill",
                    status: "COMPLETED"
                },
                {
                    id: "2",
                    date: new Date(1639486575000),
                    sender: {
                        firstName: "John2",
                        lastName: "Smith",
                        dateOfBirth: new Date("1970-02-23"),
                        IDNumber: "100001"
                    },
                    recipient: {
                        firstName: "Jane2",
                        lastName: "Doe",
                        email: "janedoe@company2.com",
                        accountNumber: "200001",
                        bank: "TD"
                    },
                    amount: 100.00,
                    currencyCd: "USD",
                    comments: "Rent",
                    status: "PENDING"
                },
                {
                    id: "3",
                    date: new Date(1639478930000),
                    sender: {
                        firstName: "John3",
                        lastName: "Smith",
                        dateOfBirth: new Date("1970-03-23"),
                        IDNumber: "100001"
                    },
                    recipient: {
                        firstName: "Jane3",
                        lastName: "Doe",
                        email: "janedoe@company3.com",
                        accountNumber: "200001",
                        bank: "CIBC"
                    },
                    amount: 300.00,
                    currencyCd: "USD",
                    comments: "Insurance Premium",
                    status: "IN PROGRESS"
                },
                {
                    id: "4",
                    date: new Date(1638997755000),
                    sender: {
                        firstName: "John4",
                        lastName: "Smith",
                        dateOfBirth: new Date("1970-04-23"),
                        IDNumber: "100001"
                    },
                    recipient: {
                        firstName: "Jane4",
                        lastName: "Doe",
                        email: "janedoe@company4.com",
                        accountNumber: "200001",
                        bank: "RBC"
                    },
                    amount: 200.00,
                    currencyCd: "CAD",
                    comments: "Cash Transfer",
                    status: "REJECTED"
                }
            ];
        }
console.log(transactions,'transactions');
        res.status(200).json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const createTransaction = async (req, res) => {
    try {
        const { id, date, sender, recipient, amount, currencyCd, comments, status } = req.body;

        const newTransaction = new Transaction({
            id,
            date,
            sender,
            recipient,
            amount,
            currencyCd,
            comments,
            status,
        });

        const transaction = await newTransaction.save();
        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getTransactions,
    createTransaction,
};
