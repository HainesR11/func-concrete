const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const TaskSchema = require('./TaskModal');

const ProjectSchema = new mongoose.Schema({
  ProjectId: {
    type: ObjectId,
  },
  ProjectName: {
    type: String,
    required: [true, 'A project must have a name'],
    trim: true,
  },
  Owner: {
    type: String,
  },
  Tasks: [TaskSchema],
  People: {
    Name: {
      type: String,
    },
    ProfilePicture: {
      type: String,
    },
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
