'use strict'

const User=use('App/Models/User')
const Hash = use('Hash')

class UserController {

    async login({request,auth}){
        try{
             const {email,senha}=request.all()
             const user=await User.find(3)
             const isSame = await Hash.verify(senha,user.senha)
             if (!isSame || email!=user.email) return {error:'senha ou email errada'}
             const res=await auth.generate(user)
             return res
        }catch(err){
             return err
        }
    }
}

module.exports = UserController
