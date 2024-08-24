import User from "../model/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const createUser = new User({
            fullname,
            email,
            password,
        });
        createUser.save();
        res.status(201).json({ message: "Internal server error" });
    } catch(error) {
        console.log("Error: " + error.message);
res.status(500).json({ message: "Internal server error" });
    }
};