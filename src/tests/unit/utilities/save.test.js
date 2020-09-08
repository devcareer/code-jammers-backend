const { expect } = require('chai')
const { match, stub, resetHistory } = require('sinon')
const proxyquire = require('proxyquire')
 
const { makeMockModels } = require('sequelize-test-helpers')
 
describe('src/utils/save', () => {
  const Food = { findOne: stub() }
  const mockModels = makeMockModels({ Food })
 
  const save = proxyquire('../../../src/utils/save', {
    '../models': mockModels
  })
 
  const id = 1
  const data = {
    firstname: 'Testy',
    lastname: 'McTestface',
    email: 'testy.mctestface.test.tes',
    token: 'some-token'
  }
  const fakeFood = { id, ...data, update: stub() }
 
  let result
 
  context('food does not exist', () => {
    before(async () => {
      Food.findOne.resolves(undefined)
      result = await save({ id, ...data })
    })
 
    after(resetHistory)
 
    it('called Food.findOne', () => {
      expect(Food.findOne).to.have.been.calledWith(match({ where: { id } }))
    })
 
    it("didn't call food.update", () => {
      expect(fakeFood.update).not.to.have.been.called
    })
 
    it('returned null', () => {
      expect(result).to.be.null
    })
  })
 
  context('food exists', () => {
    before(async () => {
        fakeFood.update.resolves(fakeFood)
      Food.findOne.resolves(fakeFood)
      result = await save({ id, ...data })
    })
 
    after(resetHistory)
 
    it('called Food.findOne', () => {
      expect(Food.findOne).to.have.been.calledWith(match({ where: { id } }))
    })
 
    it('called food.update', () => {
      expect(fakeFood.update).to.have.been.calledWith(match(data))
    })
 
    it('returned the food', () => {
      expect(result).to.deep.equal(fakeFood)
    })
  })
})