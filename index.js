require('dotenv').config();
const server = require('./api/server.js')


const PORT = 4008;

server.listen(PORT, () => console.log(`server is running at port ${PORT}`)) 