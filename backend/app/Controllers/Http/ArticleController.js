'use strict'
const Helpers = use('Helpers')
const Article=use('App/Models/Artige')
const Video=use('App/Models/Video')
const Image=use('App/Models/Image')
const Database = use('Database')
const fs=require('fs')
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
    async getArticle({params}){
        const {id}=params
        const data=await Article.find(id) 
            return {
              id: data.id,
              nome: data.nome,
              description:data.description,
              fulldescription:data.fulldescription,
              price:data.price,
              avatar: `http://localhost:3333/${data.avatar}`,
              date:data.created_at
              }
        
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
          try {
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
                        }else return {code:"O tipo ou extensão é invalido" }
                    if(res){
                          await avatars.move(Helpers.tmpPath(),{
                            name:avatar,
                            overwrite: true
                        })    
                      }
                    if (!avatars.moved())return avatars.error() 
                    return response.json(res)
            

          } catch (error) {
             return error
          }
        }

    async updateFile({request,response,params}){
        const validationOptions = {
            types: ['image'],
            size: '500mb',
            extnames: ['png', 'jpg']
          }
           const avatars = request.file('file', validationOptions)
           var avatar=avatar=`photos/${new Date().getTime()}.${avatars.extname}`
           const{id}=params
           const {nome,description,fulldescription,price,old_file} =request.all()
           const data=await Article.find(id)
              try {
                    if( (avatars.type==validationOptions.types[0]) && (avatars.extname==validationOptions.extnames[0] 
                        || avatars.extname==validationOptions.extnames[1]) && (validationOptions.size>avatars.size)
                      ){   await data.merge({
                              nome:nome,
                              avatar:avatar,
                              description:description,
                              fulldescription:fulldescription,
                              price:price
                          })
                          var res=await data.save() 
                          
                        }else return {code:500,msg:"O tipo ou extensão é invalido" }
                    if(res){
                           try{
                             const fs = Helpers.promisify(require('fs'))
                             const list=await fs.unlink(Helpers.tmpPath(old_file))
                           
                             await avatars.move(Helpers.tmpPath(),{
                               name:avatar,
                               overwrite: true
                            })
                           }catch(error){
                              await avatars.move(Helpers.tmpPath(),{
                                name:avatar,
                                overwrite: true
                            })
                            return error
                           }       
                      }
                    if (!avatars.moved())return avatars.error() 
                    return response.json(res)
          } catch (error) {
             return error
          }
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
