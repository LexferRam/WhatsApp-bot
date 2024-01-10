// const sendMessage = require("../service/apiService")
const verificar = (req, res) => {
    try {
        var tokenapi = "TOKENAPINODE"
        var token = req.query["hub.verify_token"]
        var challenge = req.query["hub.challenge"]
        if(challenge != null && token != null && token == tokenapi){
            res.send(challenge)
        }else{
            res.status(400).send();

        }
    } catch (error) {
        res.status(400).send();
    }
}

const recibir = (req, res) => {
    try {
        const entry = (req.body["entry"])[0]
        const changes = (entry["changes"])[0]
        const value = changes["value"]
        const objMessage = value["messages"]

        const messages = objMessage[0]
        const number = messages["from"]
        const text = messages["text"]["body"]
        console.log(`El numero es ${number} y el texto es ${text}`)
        // sendMessage.sendMenssageWhatsapp(text,number)
        res.send("EVENT_RECEIVED"); 

    } catch (error) {
        console.log(error)
        res.send("EVENT_RECEIVED"); 
    }
}

module.exports = {
    verificar,
    recibir
}