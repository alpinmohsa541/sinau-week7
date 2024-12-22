const users = require('../models/userModel');

// Get all users
const getUsers = (req, res) => {
    const { name } = req.query; // Example of query
    if (name) {
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(name.toLowerCase())
        );
        return res.json(filteredUsers);
    }
    res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
    const { id } = req.params; // Example of params
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

module.exports = {
    getUsers,
    getUserById,
};
