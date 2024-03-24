const mongoose = require('mongoose');




const productSchema=new mongoose.Schema({
    
    productName:{
        type:String
    },
    cartegory:{
        type:String
    },
    description:{
        type:String
    },
    images: {
        type:[String]

    },

    stock:{
        type:String
    },
    price:{
        type:String
    },
    discount:{
        type:String
    },
    isBlocked: {
        type: Boolean,
        default: false // Assuming categories are initially not blocked
    }

});

module.exports=mongoose.model("product",productSchema);