const express = require('express');
const { GetAllProjects, GetProject, DeleteProject, UpdateProject, CreateProject } = require('../Controllers/ProjectControllers');

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
.get(GetAllProjects)
.post(CreateProject)

router
.route('/:userid/:projectId')
.get(GetProject)
.patch(UpdateProject)
.delete(DeleteProject)



module.exports = router