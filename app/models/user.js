const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name: { type: String, required: [true, 'first name is required'] },
  last_name: { type: String, required: [true, 'last name is required'] },
  email: { type: String, required: [true, 'email is required'] },
  username: { type: String, required: [true, 'username is required'] },
  provider: { type: String, default: '' },
  facebook: {},
  twitter: {},
  github: {},
  google: {},
  linkedin: {}
})

/**
 * Methods
 */
UserSchema.methods = {}

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Load
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */
  load: (options, cb) => {
    options.select = options.select || 'first_name last_name'
    return this.findOne(options.criteria)
      .select(options.select)
      .exec(cb)
  }
}

mongoose.model('User', UserSchema)
