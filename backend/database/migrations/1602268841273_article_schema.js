'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.table('articles', (table) => {
      // alter table
    })
  }

  down () {
    this.table('articles', (table) => {
      // reverse alternations
      table.integer('adimin_id').after('nome')
    })
  }
}

module.exports = ArticleSchema
