// scripts/populateDB.js
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Transaction = require('../models/Transaction');
const {dummyData} = require("./dummyData");

const transactions = [
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

const populateDB = async () => {
    try {
        await connectDB();
        await Transaction.deleteMany({});
        await Transaction.insertMany(transactions);
        console.log('Database populated!');
        process.exit();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

populateDB();



