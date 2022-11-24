const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    TaskId: {
        type: ObjectId
    },
    TaskName: {
        type: String,
        required: [true, 'A task must have a name'],
    },
    ProjectName: {
        type: String,
        required: [true, 'A task must have a parent project'],
    },
    CreatedBy: {
        type: String,
    },
    Involved: {
        Name: {
            type: String
        },
        ProfilePicture: {
            type: String,
        }
    },
    DateCreated: {
        type: String,
    },
    DateCompleted: { 
        type: String,
    },
    DueDate: {
        type: String,
        required: [true, 'A task must have a Due Date'],
    }
})

module.exports = TaskSchema