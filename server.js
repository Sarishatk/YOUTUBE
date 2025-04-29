const http = require('http')
const app = require('../YOUTUBE/app')
const server = http.createServer(app)
const PORT = 4000 ||  process.env.PORT 
server.listen(PORT,()=>{
    console.log('running on port 4000',+PORT);
    
})