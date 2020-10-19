'use strict'
const Article=use('App/Models/Artige')
const Helpers = use('Helpers')
const Image=use('App/Models/Image')
const Database = use('Database')

class ArticleController {

    async index({response}){
        const data=await Article.all() 
        return response.json({data})
    }

    async show({params,response}){
        const {path} =params
        /* return path */
        const data=new Image()
        //return data
        const res=await Image.getUrl(path)
        return res;
    }

    async upload({request,response}){

        const validationOptions = {
            types: ['image','video'],
            size: '1gb',
            extnames: ['png', 'jpg','mp4']
          }
          
          const avatars = request.file('file', validationOptions)
          const avatar=`${new Date().getTime()}.${avatars.extname}`
          const {adimin_id,nome,description,fulldescription,price} =request.all()
         
          if( (avatars.type==validationOptions.types[0] || 
                avatars.type==validationOptions.types[1]) 
               && (avatars.extname==validationOptions.extnames[0] 
                || avatars.extname==validationOptions.extnames[1]  || 
              avatars.extname==validationOptions.extnames[2])
               && (validationOptions.size>avatars.size)
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
                
                if(avatars.extname=='mp4'){
                  await avatars.move(Helpers.tmpPath('moves'),{
                    name: avatar,
                    overwrite: true
                  })
                }else{
                  await avatars.move(Helpers.tmpPath('photos'),{
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
