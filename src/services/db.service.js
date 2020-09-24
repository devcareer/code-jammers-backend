import { Profiles, Users } from "../models";

export async function updateUserTb(userDetails, username) {
 const result = await Users.update(userDetails, {
   where: { username },
   returning: true,
   plain: true,
 }).then(result => result[1].dataValues);
 return result;
}

export async function updateProfileTb(profileDetails, username) {
  const result = await Users.findOne({
    where: { username },
  }).then(async user => {
    const { id } = user;
    const updatedProfile = await Profiles.update(profileDetails, {
      where: { userId: id },
      returning: true,
      plain: true,
    }).then(result => result[1].dataValues);
    return updatedProfile;
  }).then(result => result);
  return result;
}
