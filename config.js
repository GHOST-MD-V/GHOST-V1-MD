const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZP10BRrK#GRY8au51IjTAaa_NDQ1oB-h49thmrzkjcXchwBi0ECU",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/RSmYfMy/maxresdefault.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi BLAST-MD Is Online Now 💻\n*💻 Owner* - BLAST-MD\n\n*💻 Owner Number* -244956100349",
SUDO_NB: process.env.SUDO_NB || "244956100349",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
