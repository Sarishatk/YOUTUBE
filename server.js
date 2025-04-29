const http = require('http')
const app = require('../YOUTUBE/app')
const server = http.createServer(app)
const PORT = 4000 
server.listen(PORT,()=>{
    console.log('running on port 4000',+PORT);
    
})