import { version } from '../../package.json'
import _ from 'lodash'

const defaultOpts = {
  type: 'line',
  editable: true,
}
export const init = function(opts) {
  opts = _.merge(defaultOpts, opts)
  this._opts = opts
  this._version = version
  this.type = opts.type
  this.editable = opts.editable
}
