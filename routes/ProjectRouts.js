const express = require('express');

const router = express.Router();

const notThere = (req, res) => {
    res.status(500).json({
        response: 'Not Avaliable',
        message: 'EndPoint Not Created'
    })
}

//Projects
router
.route('/:userid')
.get(notThere)
.put(notThere)

//Project Tasks
router
.route('/:userid/:projectid')
.get(notThere)
.put(notThere)
.delete(notThere)
.patch(notThere)

module.exports = router