//#region IMPORTS
const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');
//#endregion

module.exports = {
    
    //#region GET
    async list(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    //#endregion

    //#region POST
    async create(request, response) {
        const { nome, email, whatsapp, cidade, uf } = request.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        })

        return response.json({ id });
    }
    //#endregion
}