'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Adimin extends Model {
    article () {
        return this.hasMany('App/Models/Artige')
      }
}

module.exports = Adimin
