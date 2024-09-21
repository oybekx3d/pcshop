const express = require("express");
const router = express.Router();
const {GamingComputer, ProductivityComputer, HomeComputer, QuickDropComputer, Monitor, Keyboard, Mouse, Headset, Storage, ExternalStorage, Cool, Deal} = require('../models/models.js');

// Lists
  // Monitors
  router.get('/monitors', (req, res) => {
    Monitor.find()
    .then((items) => {
      res.render('accessories', {title: 'Monitors',h1: 'Monitors' ,items});
    })
    .catch((err) => {
      console.log(err);
  })
  })
  // Kbds
  router.get('/keyboards', (req, res) => {
    Keyboard.find()
    .then((items) => {
      res.render('accessories', {title: 'Keyboards', h1: 'Keyboards', items});
    })
    .catch((err) => {
      console.log(err);
  })
  })
  // Mice
  router.get('/mice', (req, res) => {
    Mouse.find()
    .then((items) => {
      res.render('accessories', {title: 'Mice', h1: 'Mice', items});
    })
    .catch((err) => {
      console.log(err);
  })
  })
  // headsets
  router.get('/headsets', (req, res) => {
    Headset.find()
    .then((items) => {
      res.render('accessories', {title: 'Headsets', h1: 'Headsets', items});
    })
    .catch((err) => {
      console.log(err);
  })
  })
  // external storage
  router.get('/externalstorage', (req, res) => {
    ExternalStorage.find()
    .then((items) => {
      res.render('accessories', {title: 'External Storage', h1: 'External Storage', items});
    })
    .catch((err) => {
      console.log(err);
  })
  })
  // cool accs
  router.get('/cool', (req, res) => {
    Cool.find()
    .then((items) => {
      res.render('accessories', {title: 'Cool Accs', h1: 'Cool Accs', items});
    })
    .catch((err) => {
      console.log(err);
  })
  })


// Single items

  // Monitor
  router.get('/monitor/:id', (req, res) => {
    res.render('accessories', {title: 'Monitors'});
  })
  // Keyboard
  router.get('/keyboard/:id', (req, res) => {
    res.render('accessories', {title: 'Keyboards'});
  })
  // Mouse
  router.get('/mouse/:id', (req, res) => {
    res.render('accessories', {title: 'Mice'});
  })
  // Headset
  router.get('/headset/:id', (req, res) => {
    res.render('accessories', {title: 'Headsets'});
  })
  // Storage
  router.get('/storage/:id', (req, res) => {
    res.render('accessories', {title: 'Storage'});
  })
  // External Storage
  router.get('/externalstorage/:id', (req, res) => {
    res.render('accessories', {title: 'External Storage'});
  })
  // cool
  router.get('/cool/:id', (req, res) => {
    res.render('accessories', {title: 'Cool Accs'});
  })






// Export
module.exports = router