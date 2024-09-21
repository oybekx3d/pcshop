const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {GamingComputer, ProductivityComputer, HomeComputer, QuickDropComputer, Monitor, Keyboard, Mouse, Headset, Storage, ExternalStorage, Cool, Deal} = require('./models/models.js');
const pcRoutes = require('./routes/pcs');
const accRoutes = require('./routes/accs');
const addRoutes = require('./routes/add');
const other = require('./routes/other');

// connect to mongoDB
const dbURI = 'mongodb+srv://mongodbusername:EUfi1pDNAMdaN57C@cluster0.ssctgud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then(() => app.listen(3000))
    .catch((err) => console.log(err));

// set view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));    
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// main
app.get('/', (req, res) => {

async function getData() {
  let gamingComputers = [];
  let productivityComputers = [];
  let homeComputers = [];
  let quickDropComputers = [];

  try {
    const results = await Promise.all([
      GamingComputer.find().limit(4),
      ProductivityComputer.find().limit(4),
      HomeComputer.find().limit(4),
      QuickDropComputer.find().limit(4),
    ]);

    gamingComputers = results[0];
    productivityComputers = results[1];
    homeComputers = results[2];
    quickDropComputers = results[3];

    res.render('index', {gamingComputers, productivityComputers, homeComputers, quickDropComputers, title: "Home"});
  } catch (err) {
    console.log(err);
  }
}
getData();
})

// PCs
app.use('/pcs',pcRoutes);

// accs
app.use('/accs',accRoutes);

// deals
app.get('/deals', (req, res) => {
  Deal.find()
    .then((items) => {
      res.render('deals', {title: "deals", h1: "Deals", items});
    })
    .catch((err) => console.log(err));
})

// services
app.get('/services', (req, res) => {
  res.render('services', {title: "services", h1: "Services"})
})

// others
app.use(other);


// Admin
app.get('/admin', (req, res) => {
  res.render('admin', {title: "Admin"});
})

// Save item
app.post('/addItem/:cat', (req, res) => {
  const category = req.params.cat;
  switch (category) {
    case 'GamingComputer':
      const gamingComputer = new GamingComputer(req.body);
      gamingComputer.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'ProductivityComputer':
      const productivityComputer = new ProductivityComputer(req.body);
      productivityComputer.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'HomeComputer':
      const homeComputer = new HomeComputer(req.body);
      homeComputer.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'QuickDropComputer':
      const quickDropComputer = new QuickDropComputer(req.body);
      quickDropComputer.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'Monitor':
      const monitor = new Monitor(req.body);
      monitor.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'Keyboard':
      const keyboard = new Keyboard(req.body);
      keyboard.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'Mouse':
      const mouse = new Mouse(req.body);
      mouse.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'Headset':
      const headset = new Headset(req.body);
      headset.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'Storage':
      const storage = new Storage(req.body);
      storage.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'ExternalStorage':
      const externalStorage = new ExternalStorage(req.body);
      externalStorage.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
    case 'Cool':
      const CoolItem = new Cool(req.body);
      CoolItem.save()
        .then(() => res.redirect('/admin')) 
        .catch((err) => console.log(err));
      break;
    case 'Deal':
      const deal = new Deal(req.body);
      deal.save()
        .then(() => res.redirect('/admin'))
        .catch((err) => console.log(err));
      break;
  }
})



// add stuff
app.use('/add',addRoutes);

