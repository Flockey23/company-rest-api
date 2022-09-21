const DB = require('./DBController');
const User = DB.db.users;
const bcrypt = require("bcrypt")

exports.signup = (req,res) => {
    User.create({
        login: req.body.login,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(res.send({
            message: "User was registered successfully!"
        }))
        .catch(err =>{
            res.status(500).send({message : err.message});
        })
}

exports.signin = (req,res) => {
    User.findOne({
        where: {
            login: req.body.login
        }
    })
        .then(user => {
            if(!user){
                return res.status(404).send({message: "User not found!"});
            }

            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )

            if(!passwordIsValid){
                return res.status(401).send({
                    message: "Invalid password!"
                })
            }
            res.status(200).send({
                id: user.id,
                login: user.login
            })
        })
}