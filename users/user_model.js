import { decodeBase64 } from "bcryptjs";

async function add(user) {
    const [id] = await db('users').insert(user)
    return findbyId(id)
}
function findyById(id) {
    return db('users')
    .where({id})
    .first();
}

module.exports = {
    add,
    findById
}