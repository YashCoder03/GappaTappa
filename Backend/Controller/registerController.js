const register = require("../model/addUser");
const check1 = require("../model/checkUser");


    const reg = async(req,res) =>
    {
        try{
            const {phone,userID,userName} = req.body;
            const  registeruser = new register({
                userName : userName,
                userID : userID,
                phone : phone
            });
            console.log(phone,userID,userName);
            await registeruser.save(function(err,result){
                if(err)
                {
                    console.log(err);
                }
            });
            res.status(201).json({});
        }
        catch(error)
        {
            res.status(500).send({error : "server-timeout"});
        }
    }
    const check = async(req,res) =>{
        try {
            const userID = req.body;
            if(check1.isExist(userID))
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

    module.exports = {reg,check}