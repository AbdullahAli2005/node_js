const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data; }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ "message": "Username and password are required." });

    // check for duplicate usernames in the database
    const duplicate = usersDB.users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409); // Conflict

    try {
        // Encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        // Create a new user object
        const newUser = {
            "username": user,
            "password": hashedPwd
        };

        // Store the new user in the database
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );

        console.log(usersDB.users);
        return res.status(201).json({ "message": `New user ${user} created successfully.` });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ "message": `Internal server error. ${err}` });
    }
}

module.exports = { handleNewUser };