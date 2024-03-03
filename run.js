const {db} = require('./db/database')
const {app} = require('./server')


const start = async()=>{
    try {
        await db.sync();
        app.listen(4040, ()=>{
            console.log('server is running on http://localhost:4040');
        })
    } catch (error) {
        console.error(error);
    }
}

start();