//#region IMPORTS
const generateUniqueId = require('../../src/utils/generateUniqueId')
//#endregion

describe('Gerar ID único', () => {
    it('deve gerar um ID único', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
})