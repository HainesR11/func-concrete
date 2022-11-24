const fs = require("fs")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Project = require('../model/ProjectModel')

dotenv.config({path: './config.env'})


const DBURL = process.env.NODE_ENV === 'development' ? process.env.DATABASE_DEV : process.env.DATABASE_PROD

const DB = DBURL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {}).then(con => {
    console.log(con.connections)
    console.log("This is connected")
})

const Projects = JSON.parse(fs.readFileSync(`${__dirname}/ProjectMocks/index.json`, "utf-8"))

const importData = async () => {
    try {
        // await Project.deleteMany()
        // console.log('Data Deleted')
        await Project.create(Projects)
        console.log('Data Loaded')
    }
    catch(err){
        console.log(err)
    }
    process.exit()
}

const deleteData = async () => {
    try {
        await Project.deleteMany()
        console.log('Data Deleted')
        process.exit()
    }
    catch(err){
        console.log(err)
    }
}

if (process.argv[2] === "--import") {
    importData()
}
if (process.argv[2] === "--delete") {
    deleteData()
}

