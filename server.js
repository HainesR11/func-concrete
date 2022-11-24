const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config({path: './config.env'})
const app = require('./app')

const DBString = process.env.NODE_ENV === 'development' ? process.env.DATABASE_DEV : process.env.DATABASE_PROD

const DB = DBString.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {}).then(con => {
    console.log(con.connections)
    console.log('---Database Successfully Connected---')
}).catch((e) => 
    console.log('Error Connecting to Database ->', e)
)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port - ${port}`)
})
