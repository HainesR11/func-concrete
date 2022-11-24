const Project = require('../model/ProjectModel');
const AppError = require('../utils/AppError');
const CatchAsync = require('../utils/Async').default;

exports.GetAllProjects = CatchAsync(async (req, res, next) => {
  let projects = await Project.find();
  res.status(200).send(projects);
});

exports.GetProject = CatchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.projectId);
  if(!project){
    return next(new AppError('No Project found', 404))
  }
  
  res.status(200).json({
    Status: 'Success',
    Project: project,
  });
});

exports.DeleteProject = CatchAsync(async (req, res, next) => {
  await Project.findByIdAndDelete(req.params.projectId);
  res.status(203).json({
    Status: 'Complete',
    Project: null,
  });
});

exports.UpdateProject = CatchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.projectId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'Complete',
    project: project,
  });
});

exports.CreateProject = CatchAsync(async (req, res, next) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    Status: 'Complete',
    Project: project,
  });
});
