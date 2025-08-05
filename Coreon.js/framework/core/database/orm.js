class ORM {
    constructor(database) {
        this.database = database;
    }

    async create(table, data) {
        const keys = Object.keys(data).join(', ');
        const values = Object.values(data).map(value => `'${value}'`).join(', ');
        const query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
        return this.database.execute(query);
    }

    async read(table, conditions = {}) {
        const conditionString = this._buildConditionString(conditions);
        const query = `SELECT * FROM ${table}${conditionString}`;
        return this.database.execute(query);
    }

    async update(table, data, conditions) {
        const setString = Object.keys(data)
            .map(key => `${key} = '${data[key]}'`)
            .join(', ');
        const conditionString = this._buildConditionString(conditions);
        const query = `UPDATE ${table} SET ${setString}${conditionString}`;
        return this.database.execute(query);
    }

    async delete(table, conditions) {
        const conditionString = this._buildConditionString(conditions);
        const query = `DELETE FROM ${table}${conditionString}`;
        return this.database.execute(query);
    }

    _buildConditionString(conditions) {
        if (Object.keys(conditions).length === 0) return '';
        const conditionString = Object.keys(conditions)
            .map(key => `${key} = '${conditions[key]}'`)
            .join(' AND ');
        return ` WHERE ${conditionString}`;
    }
}

export default ORM;