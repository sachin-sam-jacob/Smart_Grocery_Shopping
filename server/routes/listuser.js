// routes/userRoutes.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// 1. Fetch all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Server error while fetching users." });
    }
});

// // 2. View details of a specific user
// router.get('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json({ message: "Server error while fetching user details." });
//     }
// });

// // 3. Block or unblock a user
// router.put('/users/:id/block', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Toggle the isBlocked status
//         user.isBlocked = !user.isBlocked;
//         await user.save();
        
//         const status = user.isBlocked ? "blocked" : "unblocked";
//         res.status(200).json({ message: `User has been ${status}` });
//     } catch (err) {
//         res.status(500).json({ message: "Server error while updating user status." });
//     }
// });

module.exports = router;
