const Discord = require(`discord.js`);
const client = new Discord.Client();
const { defaultPrefix, token } = require('./config.json');
const prefix = require('discord-prefix');

module.exports = {D: Discord};
module.exports = {client: client};

client.once('ready', readyDiscord);

function readyDiscord() {
    console.log(`[BOT] ONLINE:  Logged in as ${client.user.tag}`);
    console.log(`[BOT] CLIENT-ID: ${client.user.id}`);
    prefix.setPrefix(defaultPrefix);
    console.log(`[BOT] DEFAULT-PREFIX:  ${prefix.getPrefix()}`);
}

const commandHandler = require("./commands")

client.on("message", commandHandler);

client.login(token);
