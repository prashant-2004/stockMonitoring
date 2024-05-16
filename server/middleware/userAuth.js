const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const userAuthenticate = async (req, res, next) => {

    try{

        const tokan = req.cookies.userTokan;
        const verifyToken = jwt.verify(tokan, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": tokan});

        if (!rootUser) {
            throw new Error('User not Found')
        }

        req.tokan = tokan;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err)
    }

}

module.exports = userAuthenticate;