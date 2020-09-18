import { User, Profile } from "../models";
import { restart } from "nodemon";

exports.editProfile = async (res, req) => {
    try {
        const { firstname, lastname, profilepicture } = req.body; 
        await Profile.update({ firstName: firstname, lastName: lastname, profilePicture: profilepicture }, {
            where: {
                username: req.username
            }
        });
    } catch (error) {
        res.status(403).json({ message: error.message }) 
    }
}