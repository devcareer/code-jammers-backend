import { expect } from 'chai'

import {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists 
} from 'sequelize-test-helpers'

import UserModel from '../../models/user'
describe('src/models/User', () => {
  const User = UserModel(sequelize, dataTypes)
  const user = new User()
  checkModelName(User)('User')
  context('properties', () => {
    ;['email', 'username', 'password', 'role'].forEach(
      checkPropertyExists(user)
    )
  })
  context('associations', () => {
    const Profile = 'some dummy profile'
    before(() => {
      User.associate({ Profile })
    })
    it('defined a hasOne association with Company', () => {
      expect(User.hasOne).to.have.been.calledWith(Profile, {
          foreignKey: 'userId',
      })
    })
  })
  context('indexes', () => {
    ;['email', 'username'].forEach(checkUniqueIndex(user))
  })
})