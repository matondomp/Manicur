'use strict'
const Helpers = use('Helpers')
const Article=use('App/Models/Artige')
const Video=use('App/Models/Video')
const Image=use('App/Models/Image')
const Database = use('Database')

class ArticleController {

    async index(){
        const data=await Article.all() 
        const articleJSON = data.toJSON()
        const list=articleJSON.map(item=>{
            return {
              id: item.id,
              nome: item.nome,
              description:item.description,
              fulldescription:item.fulldescription,
              price:item.price,
              avatar: `http://localhost:3333/${item.avatar}`,
              date:item.created_at
              }
         })
        return list
       
    }
    async payVideo(){
        const video=await Video.all() 
        const VideoJSON = video.toJSON()
        const list=VideoJSON.map(item=>{
            return {
              description:item.description,
              video:`http://localhost:3333/${item.video}`
              }
         })
        return list
       
    }

    async upload({request,response}){

        const validationOptions = {
            types: ['image'],
            size: '500mb',
            extnames: ['png', 'jpg']
          }
          
          const avatars = request.file('file', validationOptions)
          var avatar=avatar=`photos/${new Date().getTime()}.${avatars.extname}`
          const {adimin_id,nome,description,fulldescription,price} =request.all()
          if( (avatars.type==validationOptions.types[0]) && (avatars.extname==validationOptions.extnames[0] 
                || avatars.extname==validationOptions.extnames[1]) && (validationOptions.size>avatars.size)
              ){
                var res=await Article.create(
                    {
                    adimin_id:adimin_id,
                    nome:nome,
                    avatar:avatar,
                    description:description,
                    fulldescription:fulldescription,
                    price:price
                    })  
                }
            if(res){
                  await avatars.move(Helpers.tmpPath(),{
                    name:avatar,
                    overwrite: true
                 })    
              }
            if (!avatars.moved())return avatars.error() 
            return response.json(res)
    }


    async uploadVideo({request,response}){

        const validationOptions = {
            types: ['video'],
            size: '2gb',
            extnames: ['ogg','mp4']
          }
          
          const videos = request.file('file', validationOptions)
          var video=`moves/${new Date().getTime()}.${videos.extname}`
          const {description} =request.all()
         
          if( (videos.type==validationOptions.types[0]) 
               && (videos.extname==validationOptions.extnames[0] 
                || videos.extname==validationOptions.extnames[1])
               && (validationOptions.size>videos.size)
              ){
                var res=await Video.create({description:description,video:video})  
               }

            if(res){
                  await videos.move(Helpers.tmpPath(),{
                    name: video,
                    overwrite: true
                  })
                }  
             
            if (!videos.moved())return videos.error() 
            return response.json(res)

    }
}

module.exports = ArticleController
