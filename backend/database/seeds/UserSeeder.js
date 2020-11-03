'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
const Database = use('Database')

class UserSeeder {
  async run () {
    const permissions={
        username: "Maria Milita",
        senha: "200200",
        email:"freitaspedromp@gmail.com"
      }
    
    const crypt = await Hash.make(permissions.senha)
    await Database.table('users').insert({
      username: permissions.username,
      senha:crypt,
      email: permissions.email
    });
  }
}

module.exports = UserSeeder
