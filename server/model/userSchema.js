const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    number:{
        type: Number,
    },
    password:{
        type: String,
    }
});

//Password Hashing
userSchema.pre('save', async function (next) {
    console.log("HASHING..");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// Toakan generating
userSchema.methods.generateAuthToken = async function () {
    try{
        let tokan = jwt.sign({ _id: this._id }, (process.env.SECRET_KEY || "HiiThisIsMySecretKeyThatIamNotGoneTellYou"));
        this.tokans = this.tokans || [];
        this.tokans = this.tokans.push({ tokan: tokan});
        await this.save();
        return tokan;
    } catch (err){
        console.log(err);
    }
}

const Admin = mongoose.model('USERS', userSchema);

module.exports = Admin;