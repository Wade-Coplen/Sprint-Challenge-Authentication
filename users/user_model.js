const db= require('../database/dbConfig')

async function addUser(user) {
    const {id} = await db('users')
        .insert(user)
    return findbyId(id)
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
function findBy(filter){
    return db('users')
    .where(filter)
}
// function addUser(user) {
//     return db('users')
//     .insert(user)
//}

module.exports = {
    addUser,
    findById,
    find,
    insert
}