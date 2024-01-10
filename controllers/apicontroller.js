const verificar = (req, res) => {
    try{
        var tokenprojectwsp = "tokenwspproject"
        var token = req.query['hub.verify_token']
        var challenge = req.query["hub.challenge"] 

        if(challenge != null && token != null && token == tokenprojectwsp ){
            res.send(challenge)
        }else{
            res.status(400).send();
        }

        console.log(req)

    }catch(e){
        res.status(400).send(); 
    }
}


const recibir = (req, res) => {
    res.send("Recibido")
}

module.exports = {
    verificar,
    recibir
}
