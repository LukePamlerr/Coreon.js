const { expect } = require('chai');
const db = require('../database/index'); // Adjust the path as necessary

describe('Database Interaction Tests', () => {
    before(async () => {
        await db.connect(); // Ensure the database is connected before tests
    });

    after(async () => {
        await db.disconnect(); // Clean up after tests
    });

    it('should create a new record in the database', async () => {
        const newRecord = { name: 'Test Record', value: 42 };
        const result = await db.create('testCollection', newRecord);
        expect(result).to.have.property('_id');
        expect(result.name).to.equal(newRecord.name);
        expect(result.value).to.equal(newRecord.value);
    });

    it('should read a record from the database', async () => {
        const record = await db.read('testCollection', { name: 'Test Record' });
        expect(record).to.be.an('array').that.is.not.empty;
        expect(record[0]).to.have.property('name', 'Test Record');
    });

    it('should update a record in the database', async () => {
        const updatedData = { value: 100 };
        const result = await db.update('testCollection', { name: 'Test Record' }, updatedData);
        expect(result).to.have.property('modifiedCount', 1);
    });

    it('should delete a record from the database', async () => {
        const result = await db.delete('testCollection', { name: 'Test Record' });
        expect(result).to.have.property('deletedCount', 1);
    });
});