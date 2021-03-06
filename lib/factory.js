const OrangoModel = require('./Model')
const Schema = require('./Schema')
const pluralize = require('pluralize')
const convertToSnakecase = require('./helpers/convertToSnakecase')

/**
 * Constructs an DocumentModel class
 * @param {*} name
 * @param {*} schema
 * @param {*} options
 */
function factory(name, orango, schema, collectionName = '') {
  if (typeof collectionName !== 'string') {
    throw new Error('factory expects "collectionName" to be string')
  }
  collectionName = collectionName || convertToSnakecase(pluralize(name))
  if (!(schema instanceof Schema)) {
    schema = new Schema(schema)
  }
  class DocumentModel extends OrangoModel {
    constructor(data) {
      if (schema.isEdge) {
        if (arguments[1]) { // if multiple arguments then passed in as arguments
          data = {
            _from: schema.from + '/' + arguments[0],
            _to: schema.to + '/' + arguments[1]
          }
        } else { // if single argument then passed in as an object
          data = {
            _from: schema.from + '/' + arguments[0][schema.from],
            _to: schema.to + '/' + arguments[0][schema.to]
          }
        }
      }
      super(data, schema)
    }
  }
  DocumentModel.orango = orango
  DocumentModel.schema = schema
  DocumentModel.collectionName = collectionName

  Object.defineProperty(DocumentModel, 'name', {
    value: name
  })

  for (let name in schema.statics) {
    DocumentModel[name] = function() {
      return schema.statics[name].apply(DocumentModel, arguments)
    }
  }

  return DocumentModel
}

module.exports = factory
