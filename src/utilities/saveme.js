const { User } = require('../models')
 
const saveMe = async ({ id, ...data }) => {
  const user = await User.findOne({ where: { id } })
  if (user) return await user.update(data)
  return null
}
 
module.exports = saveMe