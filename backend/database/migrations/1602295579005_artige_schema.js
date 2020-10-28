'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtigeSchema extends Schema {
  up () {
    this.create('artiges', (table) => {
      table.increments()
      table.string('nome')
      table.string('avatar')
      table.string('description')
      table.text('fulldescription').unique().notNullable()
      table.decimal('price').unique().notNullable()
      table.integer('adimins_id').references('id').inTable('adimins')
      table.timestamps()
    })
  }

  down () {
    this.drop('artiges')
  }
}

module.exports = ArtigeSchema
