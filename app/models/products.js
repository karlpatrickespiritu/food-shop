const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String, default: '' },
  seller: { type: Schema.Types.ObjectId, ref: 'User' }
})

/**
 * Validations
 */
ProductSchema.path('name').required(true, 'Name is required')
ProductSchema.path('price').required(true, 'Price is required')

/**
 * Methods
 */
ProductSchema.methods = {}

/**
 * Statics
 */
ProductSchema.statics = {
  /**
   * Load
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */
  load: (options, cb) => {
    options.select = options.select || 'name price description'
    return this.findOne(options.criteria)
      .select(options.select)
      .exec(cb)
  }
}

mongoose.model('Product', ProductSchema)
