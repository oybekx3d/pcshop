const express = require("express");
const router = express.Router();


  // deals
  router.get('/deals', (req, res) => {
    res.render('deals');
  })
  // cheatsheet
  router.get('/cheatsheets', (req, res) => {
    res.render('cheatsheet', {title: 'Cheat Sheets'});
  })
  // cheat
  router.get('/cheatsheets/:id', (req, res) => {
    res.render('cheat');
  })
  // All blogs
  router.get('/blog', (req, res) => {
    res.render('blog', {title: 'Blog'});
  })
  // Blogpost
  router.get('/blog/:id', (req, res) => {
    res.render('blogpost', {title: 'Blog Post'});
  })
  // Tutorials
  router.get('/tutorials', (req, res) => {
    res.render('tutorials', {title: 'Tutorials'});
  })
  // Single tutoprial
  router.get('/tutorials/:id', (req, res) => {
    res.render('tutorial',  {title: 'Tutorial'});
  })
  // about
  router.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
  })
  // settings
  router.get('/settings', (req, res) => {
    res.render('settings', {title: 'Settings'});
  })
// Export
module.exports = router;