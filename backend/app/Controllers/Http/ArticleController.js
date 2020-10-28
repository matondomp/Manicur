'use strict'
const Article=use('App/Models/Artige')
const Helpers = use('Helpers')
const Image=use('App/Models/Image')
const Database = use('Database')

class ArticleController {

    async index(){
        const avatars=await Article.all() 
        const usersJSON = avatars.toJSON()
        const list=usersJSON.map(item=>{
            return {
              id: item.id,
              nome: item.nome,
              description:item.description,
              fulldescription:item.fulldescription,
              price:item.price,
              avatar: `http://localhost:3333/${item.avatar}`
              }
         })

        return list
       
    }
/* 
    async show({params,response}){
        const {path} =params
        const data=new Image()
        const res=await Image.getUrl(path)
        return res;
    } */

    async upload({request,response}){

        const validationOptions = {
            types: ['image','video'],
            size: '1gb',
            extnames: ['png', 'jpg','mp4']
          }
          
          const avatars = request.file('file', validationOptions)
          var avatar
          avatars.extname=='mp4'? avatar=`moves/${new Date().getTime()}.${avatars.extname}`: avatar=`photos/${new Date().getTime()}.${avatars.extname}`
        
          const {adimins_id,nome,description,fulldescription,price} =request.all()
         
          if( (avatars.type==validationOptions.types[0] || 
                avatars.type==validationOptions.types[1]) 
               && (avatars.extname==validationOptions.extnames[0] 
                || avatars.extname==validationOptions.extnames[1]  || 
              avatars.extname==validationOptions.extnames[2])
               && (validationOptions.size>avatars.size)
              ){
                var res=await Article.create(
                    {
                    adimins_id:adimins_id,
                    nome:nome,
                    avatar:avatar,
                    description:description,
                    fulldescription:fulldescription,
                    price:price
                    })  
               }

            if(res){
                
                if(avatars.extname=='mp4'){
                  await avatars.move(Helpers.tmpPath(),{
                    name: avatar,
                    overwrite: true
                  })
                }else{
                  await avatars.move(Helpers.tmpPath(),{
                    name:avatar,
                    overwrite: true
                 }) 
                }  
              }
        
            if (!avatars.moved())return avatars.error() 
            return response.json(res)

    }
}

module.exports = ArticleController
