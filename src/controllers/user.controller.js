import { Users, Profiles } from "../models";

// eslint-disable-next-line require-jsdoc
function filterValues(obj) {
  Object.keys(obj).forEach(key => (obj[key] === null
    || obj[key] === undefined
    || obj[key] === ""
    // eslint-disable-next-line no-param-reassign
    ? delete obj[key]
    : {}));
}
exports.editProfile = (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;

  let editedUser = {};
  let editedProfile = {};

  if (email || username || password) {
    const updateUser = { email, username, password };
    filterValues(updateUser);
    Users.update(updateUser, {
      where: {
        username: req.params.username,
      },
      returning: true,
      plain: true,
    })
      .then(result => {
        console.log(result[1].dataValues);
        editedUser = result[1].dataValues;
      })
      .then(() => {
        const { firstname, lastname, profilepicture } = req.body;
        if (firstname || lastname || profilepicture) {
          const updateProfile = {
            firstName: firstname,
            lastName: lastname,
            profilePicture: profilepicture,
          };
          filterValues(updateProfile);
          Users.findOne({
            where: {
              username: req.params.username,
            },
          })
            .then(user => {
              const { id } = user;
              Profiles.update(updateProfile, {
                where: {
                  userId: id,
                },
                returning: true,
                plain: true,
              })
                .then(result => {
                  console.log(result[1].dataValues);
                  editedProfile = result[1].dataValues;
                  res.status(200).json({ editedUser, editedProfile });
                })
                .catch(error => res.status(403).json({ message: error.message }));
            })
            .catch(error => res.status(403).json({ message: error.message }));
        } else {
          res.status(200).json({ editedUser });
        }
      })
      .catch(error => res.status(403).json({ message: error.message }));
  }
};
