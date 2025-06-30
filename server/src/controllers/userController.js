import userModel from '../model/User.js'; 

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "Missing Details"
            });
        }

        const user = new userModel({ name, email, password });
        await user.save();

        return res.json({
            success: true,
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log('Error creating user:', error);
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
