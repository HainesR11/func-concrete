const express = require('express');
const { SignUp } = require('../Controllers/UserControllers');

const router = express.Router()

const notThere = (req, res) => {
    res.status(500).json({
        response: 'Not Avaliable',
        message: 'EndPoint Not Created'
    })
}

router
.route('/')
.post(SignUp)
.get(notThere)


router
.route('/:userId')
.patch(notThere)
.delete(notThere)

module.exports = router