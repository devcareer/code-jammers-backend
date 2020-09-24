import { updateUserTb, updateProfileTb } from "../services/db.service";
import { filterValues } from "../utilities/controllers.util";

exports.editProfile = (req, res) => {
  const { email, username, password } = req.body;
  let editedUser = {};
  let editedProfile = {};
  if (email || username || password) {
    const updateUser = { email, username, password };
    filterValues(updateUser);
    updateUserTb(updateUser, req.params.username).then(result => {
      editedUser = result;
      const { firstname, lastname, profilepicture } = req.body;
      if (firstname || lastname || profilepicture) {
        const updateProfile = {
          firstName: firstname,
          lastName: lastname,
          profilePicture: profilepicture,
        };
        filterValues(updateProfile);
        updateProfileTb(updateProfile, req.params.username)
          .then(result => {
            editedProfile = result;
            return res.status(200).json({ editedUser, editedProfile });
          }).catch(error => res.status(403).json({ message: error.message }));
      } else { return res.status(200).json({ editedUser }); } return "done";
    }).catch(error => res.status(403).json({ message: error.message }));
  }
};
