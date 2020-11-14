var mongoose = require('mongoose');


let clientSchema = mongoose.Schema({
    number:{
        type : Number,
        unique : true
    },
    name : {
        type : String,
        unique: true
    },
    types:[String],
    imageUrl:String
})


// let companySchema = mongoose.Schema({
//     number:{
//         type : Number,
//         unique : true
//     },
//     name : {
//         type : String,
//         unique: true
//     },
//     types:[String],
//     imageUrl:String
// })

let  Client = mongoose.model('Client', clientSchema);

let  Company = mongoose.model('Company', companySchema);


module.exports = Client;
module.exports = Company;