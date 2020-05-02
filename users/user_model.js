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

// function addUser(user) {
//     return db('users')
//     .insert(user)
// }

module.exports = {
    addUser,
    findById
}