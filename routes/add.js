const express = require("express");
const router = express.Router();

// add stuff

// Add gaming pc
router.get('/gamingPC', (req, res) => {
    res.render('add/addgamingpc', {title: 'Gaming PCs'});
  })
  // add Prod PC
  router.get('/prodPC', (req, res) => {
    res.render('add/addProductivityComputer', {title: 'Productivity PCs'});
  })
  // Add Home Use PC
  router.get('/homePC', (req, res) => {
    res.render('add/addHomeComputer', {title: 'Home Use PCs'});
  })
  // add Quick Drop PC
  router.get('/quickdrop', (req, res) => {
    res.render('add/addQuickDropComputer', {title: 'PC Drops'});
  })
  // add Monitor
  router.get('/monitor', (req, res) => {
    res.render('add/addMonitor', {title: 'Monitors'});
  })
  // add Keyboard
  router.get('/keyboard', (req, res) => {
    res.render('add/addKeyboard', {title: 'Keyboards'});
  })
  // add Mouse
  router.get('/mouse', (req, res) => {
    res.render('add/addMouse', {title: 'Mice'});
  })
  // add Headset
  router.get('/headset', (req, res) => {
    res.render('add/addHeadset', {title: 'Headsets'});
  })
  // add Storage
  router.get('/storage', (req, res) => {
    res.render('add/addStorage', {title: 'Storage'});
  })
  // add External Storage
  router.get('/externalstorage', (req, res) => {
    res.render('add/addExternalStorage', {title: 'External Storage'});
  })
  // add cool
  router.get('/cool', (req, res) => {
    res.render('add/addCool', {title: 'Cool Accs'});
  })
  // add deal
  router.get('/deal', (req, res) => {
    res.render('add/addDeal', {title: 'Deals'});
  })


  
// Export
module.exports = router;
