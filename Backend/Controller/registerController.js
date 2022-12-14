const register = require("../model/addUser");
const model = require("../model/addUser");
const check = require("../model/checkUser");
module.exports = {

    reg : async(req,res) =>
    {
        try{
            const {phone,userID,name} = req.body;
            const  register = new register({
                name : name,
                userID : userID,
                phone : phone 
            });
            await register.save();
            res.status(201).json({});
        }
        catch(error)
        {
            res.status(500).send({error : "Server Time-out"});
        }
    },
    check : async(req,res) =>{
        try {
            const userID = req.body;
            if(check.isExist(userID))
            {
                res.status(200).json({status : "User Found"});
            }
            else
            {
                res.status(404).json({status :"User Not Found"});
            }

        }
        catch(error)
        {

        }
    }

}