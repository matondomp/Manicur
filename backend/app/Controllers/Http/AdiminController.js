'use strict'
const Adimin=use('App/Models/Adimin')
const Hash = use('Hash')
const Mail = use('Mail')

class AdiminController {

    async index({response}){

      /*   const data=await Adimin.all() */
        const adimin = await Adimin.query()
             .with('article')
             .fetch()
        return response.json({adimin})
    }

    async store({request,response}){
        const {nome,lastname,senha,email} =request.all()

        const crypt = await Hash.make(senha)
        const res=await Adimin.create({
            nome:nome,
            lastname:lastname,
            senha:crypt,
            email:email
        })
        await Mail.send('view', res.toJSON(), (message) => {
            message
              .to(res.email)
              .from('freitaspedromp@gmail.com')
              .subject('Seja Bem Vindo Mp & Melita Salão de Unhas')
          })
      
         
        return response.json(res)
    }

    async login({request,auth,params}){

        const {id}=params
        const ids=await Adimin.query().where('id',id)
             .select('email','senha').fetch()
      
        const {email,senha} =request.all()
        
            var list
            ids.rows.map(res=>list=res)    
            const isSame = await Hash.verify(senha,list.senha)
            if (!isSame || email!=list.email) return {error:'senha ou email errada'}
           
        const res=await auth.attempt(email,senha)
        return res
    }

    async update({request,params}){

        const{id}=params
        const {nome,lastname,senha,email}=request.all()
        const data=await Adimin.find(id)
        const crypt = await Hash.make(senha)

        await data.merge({
            nome:nome,
            lastname:lastname,
            senha:crypt,
            email:email
        })
        const res=await data.save() 
        return res
      
    }
}

module.exports = AdiminController
