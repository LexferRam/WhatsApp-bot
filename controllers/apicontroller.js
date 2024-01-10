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
    try {
        console.log('aquiiiiiii')
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var objetoMensaje = value["messages"]

        console.log(value)
        res.send("EVENT_RECEIVED")

    } catch (error) {
        console.log(req)
        res.send("EVENT_RECEIVED")
        
    }
}

module.exports = {
    verificar,
    recibir
}
