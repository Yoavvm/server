const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        maxLength: 9,
        minLength: 9
    },
    firstName: String,
    lastName: String,
    email: String,
    encrpytedPassword: String,
    city: String,
    street: String,
    houseNumber: String,
    role: {
        type:String,
        default:'customer'
    },
    token: {
        type: String,
        required: false
    }
})
 
const productSchema = new Schema({
    productName: String,
    productPrice: Number,
    categotryId: {
        type:Schema.Types.ObjectId,
        ref: "category"
    }
})

const categorySchema = new Schema({
    categoryName: String
})

const User = model('user', userSchema);
const Product = model('product', productSchema)
const Category = model('category', categorySchema); 

module.exports = {
    User,
    Product,
    Category,
}