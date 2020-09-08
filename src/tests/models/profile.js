import { expect } from 'chai'
import {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists 
} from 'sequelize-test-helpers'
import ProfileModel from '../../models/profile'
describe('src/models/Profile', () => {
  const Profile = ProfileModel(sequelize, dataTypes)
  const profile = new Profile()
  checkModelName(Profile)('Profile')
  context('properties', () => {
    ;['firstName', 'lastName', 'profilePicture'].forEach(
      checkPropertyExists(profile)
    )
  })
  context('associations', () => {
    const User = 'some dummy User'
    before(() => {
      Profile.associate({ User })
    })
    it('defined a belongsTo association with Company', () => {
      expect(Profile.belongsTo).to.have.been.calledWith(User, {
          foreignKey: 'userId',
      })
    })
  })
})