import User from "../models/userModel";

const SignUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide all the details" });
    }
    const exists = await User.findOne({ email });
    if (exists) {
        return res.status(400).json({
            message: "User already exists"
        })
    }
    if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Please enter a valid email" })
    }
    if (password.length < 8) {
        return res.json({ success: false, message: "Please enter a strong password" })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json({
        message: "User created successfully",
        user : user
    });
}



const Login = (req, res) => {
    const { } = req.user;

}



export default { Login, SignUp };