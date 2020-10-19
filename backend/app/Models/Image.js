'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Image extends Model {
    
    static get computed () {
        return ['url']
      }

    static getUrl(path) {
        return `${Env.get('APP_URL')}/tmp/images/${path}`
      }
}

module.exports = Image
