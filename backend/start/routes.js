'use strict'
const Helpers = use('Helpers')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const fs = require('fs');

Route.post('/','AdiminController.index')
 Route.get('/photos:path','ArticleController.show')
Route.get('/:path','ArticleController.show') 
Route.post('/index','ArticleController.index')
Route.post('/files','ArticleController.upload')

Route.get('/images/:id',async({request,params,response})=>{
    const {id}=params
    const photos=`photos/${id}`
    return response.download(Helpers.tmpPath(photos))
})

Route.get('/movies/:id',async({params,response})=>{
    const {id}=params
    const movies=`moves/${id}`
    response.download(Helpers.tmpPath(movies))
})

Route.post('/create','AdiminController.store')
Route.post('/login/:id','AdiminController.login')
Route.post('/update/:id','AdiminController.update')

/* Route.post('/chat/:message','ChatController.onMessage') */
Route.post('/rooms/:id', 'RoomController.createMessage')

