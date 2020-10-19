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
    })
  }
}

module.exports = ArticleSchema
