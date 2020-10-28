'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdiminSchema extends Schema {
  up () {
    this.table('adimins', (table) => {
      // alter table
      table.string('nome')
      table.string('lastname')
      table.string('senha').unique().notNullable()
      table.string('email').unique().notNullable()
    })
  }

  down () {
    this.table('adimins', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AdiminSchema
