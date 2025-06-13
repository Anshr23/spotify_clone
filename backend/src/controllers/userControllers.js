import {User} from "../models/userModel.js";
import { Message } from "../models/message.model.js";

export const getAllusers = async (req, res, next) => {
    try {
        const currentUser = req.auth.userId;
        const users = await User.find({ clerkId: { $ne: currentUser } });

        res.status(200).json(users);
    } catch (error) {
        consolee.log("Error in getAllusers", error);
        next(error);
    }
};

export const getMessages = async (req, res, next) => {
	try {
		const myId = req.auth.userId;
		const { userId } = req.params;

		const messages = await Message.find({
			$or: [
				{ senderId: userId, receiverId: myId },
				{ senderId: myId, receiverId: userId },
			],
		}).sort({ createdAt: 1 });

		res.status(200).json(messages);
	} catch (error) {
		next(error);
	}
};

