class CustomErrorAPI extends Error{ 

    constructor(message,status){
        super(message)
        this.status = status
    }
}

const createCustomError = (message,status)=>{
    return new CustomErrorAPI(message,status)
}

module.exports = {CustomErrorAPI, createCustomError}