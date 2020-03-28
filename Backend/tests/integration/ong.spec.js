//#region IMPORTS
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
//#endregion

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Deve criar uma nova ONG', async () => {
        const response = await request(app).post('/ongs').send({
            nome: "APAD",
            email: "apad.ong@apad.com",
            whatsapp: "11930156508",
            cidade: "São Paulo",
            uf: "SP"
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})