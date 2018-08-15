const expect = require('chai').expect
const Schema = require('../avocado/Schema')

describe('avocado schema', () => {
  describe('empty schema', () => {
    it('throw an error', () => {
      let emptySchema = function() {
        new Schema()
      }
      expect(emptySchema).to.throw('object')
    })
  })

  describe('schema type parser', () => {
    describe('function types', () => {
      let dataTypes = {
        str: String,
        num: Number,
        bool: Boolean,
        date: Date,
        arr: Array,
        obj: Object,
        fn: Function
      }
      let schema = new Schema({
        test: true
      })

      describe('String', () => {
        it('to be type "string"', () => {
          expect(schema._parseType(dataTypes.str)).to.equal('string')
        })
      })

      describe('Number', () => {
        it('to be type "number"', () => {
          expect(schema._parseType(dataTypes.num)).to.equal('number')
        })
      })

      describe('Boolean', () => {
        it('to be type "boolean"', () => {
          expect(schema._parseType(dataTypes.bool)).to.equal('boolean')
        })
      })

      describe('Date', () => {
        it('to be type "date"', () => {
          expect(schema._parseType(dataTypes.date)).to.equal('date')
        })
      })

      describe('Array', () => {
        it('to be type "array"', () => {
          expect(schema._parseType(dataTypes.arr)).to.equal('array')
        })
      })

      describe('Object', () => {
        it('to be type "object"', () => {
          expect(schema._parseType(dataTypes.obj)).to.equal('object')
        })
      })

      describe('Function', () => {
        it('to be type "func"', () => {
          expect(schema._parseType(dataTypes.fn)).to.equal('func')
        })
      })
    })

    describe('"prop.type" types', () => {
      let dataTypes = {
        str: { type: String },
        num: { type: Number },
        bool: { type: Boolean },
        date: { type: Date },
        arr: { type: Array },
        obj: { type: Object },
        fn: { type: Function }
      }
      let schema = new Schema({
        test: true
      })

      describe('String', () => {
        it('to be type "string"', () => {
          expect(schema._parseType(dataTypes.str)).to.equal('string')
        })
      })

      describe('Number', () => {
        it('to be type "number"', () => {
          expect(schema._parseType(dataTypes.num)).to.equal('number')
        })
      })

      describe('Boolean', () => {
        it('to be type "boolean"', () => {
          expect(schema._parseType(dataTypes.bool)).to.equal('boolean')
        })
      })

      describe('Date', () => {
        it('to be type "date"', () => {
          expect(schema._parseType(dataTypes.date)).to.equal('date')
        })
      })

      describe('Array', () => {
        it('to be type "array"', () => {
          expect(schema._parseType(dataTypes.arr)).to.equal('array')
        })
      })

      describe('Object', () => {
        it('to be type "object"', () => {
          expect(schema._parseType(dataTypes.obj)).to.equal('object')
        })
      })

      describe('Function', () => {
        it('to be type "func"', () => {
          expect(schema._parseType(dataTypes.fn)).to.equal('func')
        })
      })
    })

    describe('literal types', () => {
      let dataTypes = {
        str: '',
        num: 1,
        bool: true,
        date: new Date(),
        arr: [],
        obj: {},
        fn: () => {}
      }
      let schema = new Schema({
        test: true
      })

      describe('String', () => {
        it('to be type "string"', () => {
          expect(schema._parseType(dataTypes.str)).to.equal('string')
        })
      })

      describe('Number', () => {
        it('to be type "number"', () => {
          expect(schema._parseType(dataTypes.num)).to.equal('number')
        })
      })

      describe('Boolean', () => {
        it('to be type "boolean"', () => {
          expect(schema._parseType(dataTypes.bool)).to.equal('boolean')
        })
      })

      describe('Date', () => {
        it('to be type "date"', () => {
          expect(schema._parseType(dataTypes.date)).to.equal('date')
        })
      })

      describe('Array', () => {
        it('to be type "array"', () => {
          expect(schema._parseType(dataTypes.arr)).to.equal('array')
        })
      })

      describe('Object', () => {
        it('to be type "object"', () => {
          expect(schema._parseType(dataTypes.obj)).to.equal('object')
        })
      })

      describe('Function', () => {
        it('to be type "func"', () => {
          expect(schema._parseType(dataTypes.fn)).to.equal('func')
        })
      })
    })
  })

  describe('single key/value schema', () => {
    let json = {
      name: String
    }
    let schema = new Schema(json, {
      noDefaults: true
    })

    it('to be schema', () => {
      expect(schema.isSchema).to.be.true
    })

    it('to keep reference to source', () => {
      expect(schema.json).to.equal(json)
    })

    it('to have a joi version of schema', () => {
      expect(schema.joi.isJoi).to.be.true
    })

    it('to have schema key "name"', () => {
      expect(schema.schemaKeys).to.have.all.members(['name'])
    })

    it('to have options with key "noDefaults"', () => {
      expect(schema.options).to.have.all.keys('noDefaults')
    })
  })
})