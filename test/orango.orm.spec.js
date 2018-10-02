const expect = require('chai').expect
const ORM = require('../lib/ORM')
const orango = require('../lib')

describe('orango.orm', function() {

  describe('for in', function() {
    const orm = new ORM()
    orm.action('find')
    orm.collection({ name: 'users' })

    it('should do something', async function() {
      let aql = await orm.toAQL()
      expect(aql).to.equal('FOR $user IN users RETURN $user')
    })
  })

  describe('for in with filter', function() {
    const orm = new ORM()
    orm.action('find')
    orm.collection({ name: 'users' })
    orm.criteria({
      name: 'rob'
    })

    it('should do something', async function() {
      let aql = await orm.toAQL()
      expect(aql).to.equal(
        'FOR $user IN users FILTER ($user.`name` == "rob") RETURN $user'
      )
    })
  })

  describe('$or filter', function() {
    const orm = new ORM()
    orm.action('find')
    orm.collection({ name: 'users' })
    orm.criteria({
      $or: [{ name: 'rob' }, { name: 'john' }]
    })

    it('should do something', async function() {
      let aql = await orm.toAQL()
      expect(aql).to.equal(
        'FOR $user IN users FILTER (($user.`name` == "rob") OR ($user.`name` == "john")) RETURN $user'
      )
    })
  })

  describe('increment filter using $inc', function() {
    it('should do something', async function() {
      const orm = new ORM()
      orm.action('update')
      orm.collection({ name: 'users' })
      orm.model(orango.model('Test'))
      orm.data({
        stats: {
          friends: {
            $inc: 1
          }
        }
      })

      let aql = await orm.toAQL()
      expect(aql).to.equal(
        'LET modified = COUNT( FOR $user IN users UPDATE $user WITH {"stats":{"friends":$user.stats.friends+1}} IN users RETURN 1) RETURN { modified }'
      )
    })
  })

  describe('increment filter using ++', function() {
    it('should do something', async function() {
      const orm = new ORM()
      orm.action('update')
      orm.collection({ name: 'users' })
      orm.model(orango.model('Test'))
      orm.data({
        friends: '++1'
      })

      let aql = await orm.toAQL()
      expect(aql).to.equal(
        'LET modified = COUNT( FOR $user IN users UPDATE $user WITH {"friends":$user.friends+1} IN users RETURN 1) RETURN { modified }'
      )
    })
  })

  describe('increment filter using EXPR()', function() {
    it('should do something', async function() {
      const orm = new ORM()
      orm.action('update')
      orm.collection({ name: 'users' })
      orm.model(orango.model('Test'))
      orm.data({
        friends: 'EXPR(friends+1)'
      })

      let aql = await orm.toAQL()
      expect(aql).to.equal(
        'LET modified = COUNT( FOR $user IN users UPDATE $user WITH {"friends":$user.friends+1} IN users RETURN 1) RETURN { modified }'
      )
    })
  })

  describe('custom query', function() {
    it('should do something', async function() {
      const orm = new ORM()
      orm.action('find')
      orm.collection({ name: 'users' })
      orm.options({ printAQL: 'color' })
      orm.query(`FOR @@doc IN @@collection FILTER device.user == @@doc._key`)
      
      let aql = await orm.toAQL(true)
      expect(aql).to.equal(
        'FOR $user IN users FILTER device.user == $user._key RETURN $user'
      )
    })
  })
})
