
export const getAllusers = async (req, res, next) => {
    try {
        const currentUser = req.auth.userId;
        const users = await User.find({ clerkId: { $ne: currentUser } });

        res.status(200).json(users);
    } catch (error) {
        consolee.log("Error in getAllusers", error);
        next(error);
    }
}