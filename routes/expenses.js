const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// หน้าแสดงรายการทั้งหมด
router.get('/', async(req, res) => {
    const expenses = await Expense.find();
    res.render('index', { expenses });
});

// หน้าเพิ่มข้อมูล
router.get('/new', (req, res) => {
    res.render('new');
});

// บันทึกรายรับรายจ่าย
router.post('/add', async(req, res) => {
    const { type, amount, description } = req.body;
    await Expense.create({ type, amount, description });
    res.redirect('/');
});

// หน้าแก้ไขข้อมูล
router.get('/edit/:id', async(req, res) => {
    const expense = await Expense.findById(req.params.id);
    res.render('edit', { expense });
});

// อัปเดตรายรับรายจ่าย
router.put('/update/:id', async(req, res) => {
    const { type, amount, description } = req.body;
    await Expense.findByIdAndUpdate(req.params.id, { type, amount, description });
    res.redirect('/');
});

// ลบข้อมูล
router.delete('/delete/:id', async(req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;