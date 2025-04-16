const {Phone} = require('../models');

module.exports.createPhone = async(req,res,next) =>{
    try {
        const {body} = req;
        const createdPhone = await Phone.create(body);
        if(!createdPhone){
            return res.status(400).send('Something went wrong');
        }
        res.status(200).send(createdPhone);
    } catch (error) {
        next(error)
    }
}

module.exports.getAllPhones = async(req,res,next) =>{
    const {pagination} = req

    try {
        const foundAllUsers = await Phone.getAll(pagination);
        if(!foundAllUsers){
            return res.status(404).send('Phones not found')
        }
        res.status(200).send(foundAllUsers)
    } catch (error) {
        next(error)
    }
}

module.exports.getByIdPhones = async(req,res,next) =>{
    const {params: {id}} = req;
    
    try {
        const foundPhone = await Phone.getById(id)
        if(!foundPhone){
            res.status(404).send('Phone not found');
        }

        res.status(200).send(foundPhone)

    } catch (error) {
        next(error)
    }
}

module.exports.updateByIdPhone = async(req,res,next) =>{
    const {params: {id},body} = req;
    try {
        const updatePhone = await Phone.updateById(id,body)
        if(!updatePhone){
            return res.status(404).send('Phone not found')
        }
        res.status(200).send(updatePhone)    
    } catch (error) {
        next(error)
    }
}

module.exports.deleteByIdPhone = async(req,res,next) => {
    const {params: {id}} = req;
    try {
        const deletePhone = await Phone.deleteById(id)
        if(!deletePhone){
            return res.status(404).send('Phone not found')
        }
        
        res.status(200).send(deletePhone)
    } catch (error) {
        next(error)
    }
}

module.exports.getDataUserBuyPhoneModel = async(req,res,next) =>{
    const {params: {idUser,brand}} =req;
    try {
        const getUserByPhoneModel = await Phone.getModelByCastomerBuy(idUser,brand);
        if(getUserByPhoneModel.length <1){
            return res.status(404).send('User or Brand not found')
        }
        res.status(200).send(getUserByPhoneModel)
    } catch (error) {
        next(error)
    }
}

module.exports.getDataUserBuyPhoneModelDateFromDateTo = async(req,res,next) =>{
    const {params: {idUser,dateFrom,dateTo}} =req;
    try {
        const getUserByPhoneModelDate = await Phone.getModelByCastomerBuyDateFromDateTo(idUser,dateFrom,dateTo);
        if(getUserByPhoneModelDate.length <1){
            return res.status(404).send('User or Brand not found')
        }
        res.status(200).send(getUserByPhoneModelDate)
    } catch (error) {
        next(error)
    }
}