const { expect } = require('chai')
const { match, stub, resetHistory } = require('sinon')
const proxyquire = require('proxyquire')
 
const { makeMockModels } = require('sequelize-test-helpers')
 
describe('src/utilities/save', () => {
  const User = { findOne: stub() }
  const mockModels = makeMockModels({ User })
 
  const save = proxyquire('../../utilities/saveme', {
    '../models': mockModels
  })
 
  const id = 1
  const data = {
    username: 'Xavier',
    email: 'xavierfrancis@gmail.com',
    password: '123456'
  }
  const fakeUser = { id, ...data, update: stub() }
 
  let result
 
  context('user does not exist', () => {
    before(async () => {
      User.findOne.resolves(undefined)
      result = await save({ id, ...data })
    })
 
    after(resetHistory)
 
    it('called User.findOne', () => {
      expect(User.findOne).to.have.been.calledWith(match({ where: { id } }))
    })
 
    it("didn't call user.update", () => {
      expect(fakeUser.update).not.to.have.been.called
    })
 
    it('returned null', () => {
      expect(result).to.be.null
    })
  })
 
  context('user exists', () => {
    before(async () => {
      fakeUser.update.resolves(fakeUser)
      User.findOne.resolves(fakeUser)
      result = await save({ id, ...data })
    })
 
    after(resetHistory)
 
    it('called User.findOne', () => {
      expect(User.findOne).to.have.been.calledWith(match({ where: { id } }))
    })
 
    it('called user.update', () => {
      expect(fakeUser.update).to.have.been.calledWith(match(data))
    })
 
    it('returned the user', () => {
      expect(result).to.deep.equal(fakeUser)
    })
  })
})