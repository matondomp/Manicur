'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdiminSchema extends Schema {
  up () {
    this.create('adimins', (table) => {
      table.increments()
      table.string('nome')
      table.string('lastname')
      table.string('senha').unique().notNullable()
      table.string('email').unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('adimins')
  }
}

module.exports = AdiminSchema
