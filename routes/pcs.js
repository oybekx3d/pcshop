const express = require("express");
const router = express.Router();
const {GamingComputer, ProductivityComputer, HomeComputer, QuickDropComputer, Monitor, Keyboard, Mouse, Headset, Storage, ExternalStorage, Cool, Deal} = require('../models/models.js');


// Gaming PCs
router.get('/gaming', (req, res) => {
    GamingComputer.find()
        .then(result => {
            res.render('computers', {computers: result, title: 'Gaming PCs', h1: 'Gaming Computers'});
        })
        .catch(err => console.log(err));
    })

// Productivity PCs
router.get('/productivity', (req, res) => {
    ProductivityComputer.find()
        .then(result => {
            res.render('computers', {computers: result, title: 'Productivity PCs', h1: 'Productivity Computers'});
        })
        .catch(err => console.log(err));
    })
// Home Use PCs
router.get('/homeuse', (req, res) => {
    HomeComputer.find()
        .then(result => {
            res.render('computers', {computers: result, title: 'Home Use PCs', h1: 'Home Use Computers'});
        })
        .catch(err => console.log(err));
    })
// PC Drops
router.get('/drops', (req, res) => {
    QuickDropComputer.find()
        .then(result => {
            res.render('computers', {computers: result, title: 'PC Drops', h1: 'PC Drops'});
        })
        .catch(err => console.log(err));
    })
// get single PC
router.get('/pc/:id', (req, res) => {
    res.render('pc');
    })

// settings
router.get('/settings', (req, res) => {
    res.render('settings');
  })

// Export
module.exports = router