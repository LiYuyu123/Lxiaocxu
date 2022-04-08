function  proccessObject(obj){
    for(let i in obj){
        if(obj[i] === null || obj[i] === undefined){
            delete obj[i]
        }
    }
    return obj
}

export   {
    proccessObject
}