'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdiminSchema extends Schema {
  up () {
    this.create('adimins', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('adimins')
  }
}

module.exports = AdiminSchema
