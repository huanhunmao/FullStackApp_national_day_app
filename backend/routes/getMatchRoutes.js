const express = require('express');
const User = require('../models/User')

const router = express.Router();

router.get('/api/match', async (req, res) => {
    try{
        const user = await User.findOne()
        
        if(!user){
            return res.status(404).json({ message: 'User not found' })
        }

        return res.json({ success: true, matchCount: user.matchCount })
    }catch(err){
        console.log("🚀 ~ file: match.js:19 ~ router.post ~ err:", err)
        
        res.status(500).json({ message: 'Server error' });
    }
})



module.exports = router