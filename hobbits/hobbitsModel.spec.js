const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('Hobbits model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate();
        });

        it('should insert the provided hobbit into the DB', async () => {
            let hobbit = await Hobbits.insert({name: 'bob'});
            expect(hobbit.name).toBe('bob');

            hobbit = await Hobbits.insert({name: 'billy'});
            expect(hobbit.name).toBe('billy');
        });
    });
});