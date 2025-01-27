import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {   //signup have some new data to insert into database so post req
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword
        });
        await createdUser.save();     //inserting the data to database
        return res.status(201).json({ message: "User Created Successfully", user: createdUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json(({ message: "Internal server error" }));
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatched = await bcryptjs.compare(password, user.password);  //comapare the password(from req) to database password
        if (!user || !isMatched) {
            return res.status(400).json({ message: "Invalid password or username" });
        }
        else {
            return res.status(201).json({
                message: "Login sucessful", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                }
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(({ message: "Internal server error" }));

    }
}