const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data; }
}

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ "message": "Username and password are required." });

    // Check if the user exists
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); // Unauthorized

    // Validate the password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        res.status(200).json({ "message": `Welcome ${foundUser.username}!` });
    } else {
        res.sendStatus(401); // Unauthorized
    }
}

module.exports = { handleLogin };