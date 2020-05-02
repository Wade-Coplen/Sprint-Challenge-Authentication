const database = require('../database/dbConfig')

async function add(user) {
    const [id] = await db('users').insert(user)
    return findbyId(id)
}
function findById(id) {
    return db('users')
    .where({id})
    .first();
}

module.exports = {
    add,
    findById
}