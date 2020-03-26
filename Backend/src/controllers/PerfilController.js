const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const ong_id = request.headers.authorization; 

        const casosDaOng = await connection('casos').where('ong_id', ong_id).select('*');
        
        return response.json(casosDaOng);
    }
}