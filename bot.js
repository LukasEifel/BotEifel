const Discord = require(`discord.js`);
const client = new Discord.Client();
const { prefix, token } = require(`./config.json`);

module.exports = {D: Discord};
module.exports = {client: client};

client.once('ready', readyDiscord);

function readyDiscord() {
    console.log(`[BOT] ONLINE:  Logged in as ${client.user.tag}`);
    console.log(`[BOT] USER-ID: ${client.user.id}`);
    console.log(`[BOT] PREFIX:  ${prefix}`);
}

const commandHandler = require("./commands")

client.on("message", commandHandler);

client.login(token);
