'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('senha').unique().notNullable().after('email')
    })
  }

  down () {
    this.table('users', (table) => {
    })
  }
}

module.exports = UserSchema
