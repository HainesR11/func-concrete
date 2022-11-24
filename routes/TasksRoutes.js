const express = require('express')

const router = express.Router();

const notThere = (req, res) => {
    res.status(500).json({
        response: 'Not Avaliable',
        message: 'EndPoint Not Created'
    })
}

router
.route('/:projectid/:taskid')
.get(notThere)
.delete(notThere)
.patch(notThere)

module.exports = router