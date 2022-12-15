const model = require("./addUser");
module.exports = {
    getAllUser : async(data) => 
    {
        return await model.find({phone : data});
    },
    isExist : async(data) =>
    {
        if(await model.find({userID : data}) !=null)
        {
            return true;
        }
        else
        {
            return false;
        }
    },
    
}