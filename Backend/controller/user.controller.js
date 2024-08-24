import User from "../model/user.model.js";

export const signup = async(req, res) => {
try{
const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });


}catch{




}
};