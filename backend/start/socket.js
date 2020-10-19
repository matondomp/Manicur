'use strict'

const Ws = use('Ws')

Ws
  .channel('room:*', 'RoomUpdateController')
  // .middleware(['auth'])
