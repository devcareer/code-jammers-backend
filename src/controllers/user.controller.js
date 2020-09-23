import { Users, Profiles } from "../models";

exports.editProfile = (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;

  let editedUser = {};
  let editedProfile = {};

  if (email || username || password) {
    const updateUser = { email, username, password };
    Object.keys(updateUser).forEach(key => (updateUser[key] === null
      || updateUser[key] === undefined
      || updateUser[key] === ""
      ? delete updateUser[key]
      : {}));

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
          Object.keys(updateProfile).forEach(key => (updateProfile[key] === null
            || updateProfile[key] === undefined
            || updateProfile[key] === ""
            ? delete updateProfile[key]
            : {}));
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
