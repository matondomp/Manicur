'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.integer('adimin_id')
      table.string('nome')
      table.string('avatar')
      table.string('description')
      table.text('fulldescription').unique().notNullable()
      table.decimal('price').unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
