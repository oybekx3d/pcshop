// Basic or Default
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// cool Accs
const CoolSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const Cool = mongoose.model('Cools', CoolSchema);

// Deals
const dealSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
});
const Deal = mongoose.model('Deals', dealSchema);


// Monitor
const monitorSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    resolution: {
        type: String,
        required: true
    },
    refreshRate: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    panelType: {
        type: String,
        required: true
    },
    HDR:{
        type: String,
        required: true
    },
    aspectRation:{
        type: String,
        required: true
    },
    freeSync:{
        type: String,
        required: true
    },
    curved:{
        type: Boolean,
        required: true
    }
})
const Monitor = mongoose.model('Monitors', monitorSchema);


// Headset
const headsetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    microphone:{
        type: Boolean,
        required: true
    },
    connectionType:{
        type: String,
        required: true
    },
    noiseCancellation:{
        type: Boolean,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    hasRGB:{
        type: Boolean,
        required: true
    }
})
const Headset = mongoose.model('Headsets', headsetSchema);


// Storage
const storageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    speed:{
        type: Number,
        required: true
    },
    formFactor: {
        type: String,
        required: true
    },
    cableInterface: {
        type: String
    },
    isNVMe: {
        type: Boolean,
        required: true
    }
})
const Storage = mongoose.model('Storages', storageSchema);
const ExternalStorage = mongoose.model('ExternalStorages', storageSchema);

// gaming PCs
const gamingComputerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageLink:{
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },









    case:{
        type: String,
        required: true
    },
    caseLink:{
        type: String,
        required: true
    },
    caseType:{
        type: String,
        required: true
    },
    preInstalledFans:{
        type: Boolean,
        required: true
    },

    
    bluetooth:{
        type: Boolean,
        required: true
    },
    wifi:{
        type: Boolean,
        required: true
    },
    rgb:{
        type: Boolean,
        required: true
    },
    colorTheme:{
        type: String,
        required: true
    },












    cpu:{
        type: String,
        required: true
    },
    cpuLink:{
        type: String,
        required: true
    },
    cpuCoreCount:{
        type: Number,
        required: true
    },
    cpuBrand:{
        type: String,
        required: true
    },
    iGPU:{
        type: Boolean,
        required: true
    },




    cpuCooler:{
        type: String,
        required: true
    },
    cpuCoolerLink:{
        type: String,
        required: true
    },
    cpuCoolerType:{
        type: String,
        required: true
    },
    cpuCoolerLength:{
        type: Number,
        required: true
    },





    motherboard:{
        type: String,
        required: true
    },
    motherboardLink:{
        type: String,
        required: true
    },
    motherboardSize:{
        type: String,
        required: true
    },
    motherboardChipset:{
        type: String,
        required: true
    },




    ram:{
        type: String,
        required: true
    },
    ramLink:{
        type: String,
        required: true
    },
    ramCapacity:{
        type: Number,
        required: true
    },
    ramSpeed:{
        type: Number,
        required: true
    },
    ramLatency:{
        type: Number,
        required: true
    },
    ramRepeatHowMany:{
        type: Number,
        required: true
    },




    ssd1:{
        type: String,
        required: true
    },
    ssd1Link:{
        type: String,
        required: true
    },
    ssd2:{
        type: String
    },
    ssd2Link:{
        type: String
    },
    ssd3:{
        type: String
    },
    ssd3Link:{
        type: String
    },
    ssdCapacity:{
        type: Number,
        required: true
    },




    gpu1:{
        type: String
    },
    gpu1Link:{
        type: String
    },
    gpu1VramCapacity:{
        type: Number
    },
    gpu1Brand:{
        type: String,
        required: true
    },
    gpu2:String,
    gpu2Link:String,
    gpu2VramCapacity:Number,
    gpu2Brand:String,
    gpu3:String,
    gpu3Link:String,
    gpu3VramCapacity:Number,
    gpu3Brand:String,






    powerSupply:{
        type: String,
        required: true
    },
    powerSupplyLink:{
        type: String,
        required: true
    },
    powerSupplyWatts:{
        type: Number,
        required: true
    },
    powerSupplyEfficiency:{
        type: String,
        required: true
    },
    powerSupplyTier:{
        type: String,
        required: true
    }
});
const GamingComputer = mongoose.model('GamingComputers', gamingComputerSchema);


// Productivity PC
const productivityComputerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },




    cpu:{
        type: String,
        required: true
    },
    cpuLink:{
        type: String,
        required: true
    },
    cpuCoreCount:{
        type: Number,
        required: true
    },
    cpuBrand:{
        type: String,
        required: true
    },
    iGPU:{
        type: Boolean,
        required: true
    },







    

    case:{
        type: String,
        required: true
    },
    caseLink:{
        type: String,
        required: true
    },
    caseType:{
        type: String,
        required: true
    },
    preInstalledFans:{
        type: Boolean,
        required: true
    },
    bluetooth:{
        type: Boolean,
        required: true
    },
    wifi:{
        type: Boolean,
        required: true
    },
    rgb:{
        type: Boolean,
        required: true
    },
    colorTheme:{
        type: String,
        required: true
    },





    cpuCooler:{
        type: String,
        required: true
    },
    cpuCoolerLink:{
        type: String,
        required: true
    },
    cpuCoolerType:{
        type: String,
        required: true
    },
    cpuCoolerLength:{
        type: Number,
        required: true
    },
    iGPUCooler:{
        type: Boolean,
        required: true
    },




    motherboard:{
        type: String,
        required: true
    },
    motherboardLink:{
        type: String,
        required: true
    },
    motherboardSize:{
        type: String,
        required: true
    },
    motherboardChipset:{
        type: String,
        required: true
    },




    ram:{
        type: String,
        required: true
    },
    ramLink:{
        type: String,
        required: true
    },
    ramSpeed:{
        type: Number,
        required: true
    },
    ramLatency:{
        type: Number,
        required: true
    },
    ramCapacity:{
        type: Number,
        required: true
    },
    ramRepeatHowMany:{
        type: String,
        required: true
    },



    ssd1:{
        type: String,
        required: true
    },
    ssd1Link:{
        type: String,
        required: true
    },
    ssd2:{
        type: String,
        required: true
    },
    ssd2Link:{
        type: String,
        required: true
    },
    ssd3:{
        type: String,
        required: true
    },
    ssd3Link:{
        type: String,
        required: true
    },
    ssd4:{
        type: String,
        required: true
    },
    ssd4Link:{
        type: String,
        required: true
    },
    ssdCapacity:{
        type: Number,
        required: true
    },


    gpu1:{
        type: String,
        required: true
    },
    gpu1Link:{
        type: String,
        required: true
    },
    gpu1VramCapacity:{
        type: Number,
        required: true
    },
    gpu1Brand:{
        type: String,
        required: true
    },
    gpu2:String,
    gpu2Link:String,
    gpu2VramCapacity:Number,
    gpu2Brand:String,
    gpu3:String,
    gpu3Link:String,
    gpu3VramCapacity:Number,
    gpu3Brand:String,








    powerSupply:{
        type: String,
        required: true
    },
    powerSupplyLink:{
        type: String,
        required: true
    },
    powerSupplyWatts:{
        type: Number,
        required: true
    },
    powerSupplyEfficiency:{
        type: String,
        required: true
    },
    powerSupplyTier:{
        type: String,
        required: true
    }
});
const ProductivityComputer = mongoose.model('ProductivityComputers', productivityComputerSchema);


// Home PCs
const homeComputerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },




    case:{
        type: String,
        required: true
    },
    caseLink:{
        type: String,
        required: true
    },
    caseType:{
        type: String,
        required: true
    },
    preInstalledFans:{
        type: Boolean,
        required: true
    },
    bluetooth:{
        type: Boolean,
        required: true
    },
    wifi:{
        type: Boolean,
        required: true
    },
    rgb:{
        type: Boolean,
        required: true
    },
    colorTheme:{
        type: String,
        required: true
    },




    cpu:{
        type: String,
        required: true
    },
    cpuLink:{
        type: String,
        required: true
    },
    cpuCoreCount:{
        type: Number,
        required: true
    },
    cpuBrand:{
        type: String,
        required: true
    },
    iGPU:{
        type: Boolean,
        required: true
    },




    cpuCooler:{
        type: String,
        required: true
    },
    cpuCoolerLink:{
        type: String,
        required: true
    },
    cpuCoolerType:{
        type: String,
        required: true
    },
    cpuCoolerLength:{
        type: Number,
        required: true
    },



    motherboard:{
        type: String,
        required: true
    },
    motherboardLink:{
        type: String,
        required: true
    },
    motherboardSize:{
        type: String,
        required: true
    },
    motherboardChipset:{
        type: String,
        required: true
    },




    ram:{
        type: String,
        required: true
    },
    ramLink:{
        type: String,
        required: true
    },
    ramSpeed:{
        type: Number,
        required: true
    },
    ramLatency:{
        type: Number,
        required: true
    },
    ramCapacity:{
        type: Number,
        required: true
    },
    ramRepeatHowMany:{
        type: String,
        required: true
    },




    ssd1:{
        type: String,
        required: true
    },
    ssd1Link:{
        type: String,
        required: true
    },
    ssd2:{
        type: String,
        required: true
    },
    ssd2Link:{
        type: String,
        required: true
    },
    ssd3:{
        type: String,
        required: true
    },
    ssd3Link:{
        type: String,
        required: true
    },
    ssdCapacity:{
        type: Number,
        required: true
    },



    gpu: String,
    gpuLink: String,
    gpuVramCapacity: Number,
    gpuBrand: String,


    powerSupply:{
        type: String,
        required: true
    },
    powerSupplyLink:{
        type: String,
        required: true
    },
    powerSupplyWatts:{
        type: Number,
        required: true
    },
    powerSupplyEfficiency:{
        type: String,
        required: true
    },
    powerSupplyTier:{
        type: String,
        required: true
    }
});
const HomeComputer = mongoose.model('HomeComputers', homeComputerSchema);


// QuickDrop PC
const quickDropComputerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },



    cpu:{
        type: String,
        required: true
    },
    cpuLink:{
        type: String,
        required: true
    },



    cooler:{
        type: String,
        required: true
    },
    coolerLink:{
        type: String,
        required: true
    },



    mobo:{
        type: String,
        required: true
    },
    moboLink:{
        type: String,
        required: true
    },



    ram:{
        type: String,
        required: true
    },
    ramLink:{
        type: String,
        required: true
    },
    ramRepeatHowMany:{
        type: String,
        required: true
    },



    ssd1:{
        type: String,
        required: true
    },
    ssd1Link:{
        type: String,
        required: true
    },
    ssd2:String,
    ssd2Link:String,
    ssd3:String,
    ssd3Link:String,
    ssdCapacity:Number,



    gpu:String,
    gpuLink:String,


    case:{
        type: String,
        required: true
    },
    caseLink:{
        type: String,
        required: true
    },


    psu:{
        type: String,
        required: true
    },
    psuLink:{
        type: String,
        required: true
    }
});
const QuickDropComputer = mongoose.model('QuickDropComputers', quickDropComputerSchema);


// Mouse
const mouseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },  
    price: {
        type: Number,
        required: true
    },
    buttonCount: {
        type: Number,
        required: true
    },
    connectionType: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    hasRGB:{
        type: Boolean,
        required: true
    }
})
const Mouse = mongoose.model('Mice', mouseSchema);


// Keyboard
const keyboardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    
    switches: {
        type: String,
        required: true
    },
    mechanical:{
        type: Boolean,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    connectionType:{
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    hasRGB:{
        type: Boolean,
        required: true
    }
})
const Keyboard = mongoose.model('Keyboards', keyboardSchema);

module.exports = {
    Cool,
    Deal,
    Monitor,
    Headset,
    Storage,
    QuickDropComputer,
    ProductivityComputer,
    Mouse,
    HomeComputer,
    Keyboard,
    GamingComputer,
    ExternalStorage
};