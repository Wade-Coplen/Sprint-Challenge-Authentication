const db= require('../database/dbConfig')

async function addUser(user) {
    const [id] = await db('users')
        .insert(user)
    return findById(id)
}
function findById(id) {
    return db('users')
    .where({id})
    .first();
}
function getAll() {
    return db('users')
}
function find() {
    return db('users')
    .select('id', 'username', 'password')
}
function insert() {
    return db('users')
    .insert(user)
}
function findBy(user){
    return db('users')
    .where(user)
    .first()
}


module.exports = {
    addUser,
    findById,
    find,
    // insert,
    findBy
}