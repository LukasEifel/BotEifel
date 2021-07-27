const fs = require('fs');
const Discord = require(`discord.js`);
const { prefix } = require("./config.json");
//const Discord = require("./bot").D;
const client = require("./bot").client;

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync(`./commands`);

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(`.js`));
    for(const file of commandFiles) {
        const commander = require(`./commands/${folder}/${file}`);
        client.commands.set(commander.name, commander);
    }
}

module.exports = async function (msg) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    //console.log(client.commands.has(commandName));

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName)
        || client.command.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && msg.channel.type === "dm") {
        return msg.reply("I can\'t execute that command inside DMs!");
    }

    if (command.permissions && msg.channel.type !== "dm") {
        const authorPerms = msg.channel.permissionsFor(msg.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return msg.reply("**you can not do this! You need the following permissions: **" +
            command.permissions);
        }
    }

    if (command.args && !args.length) {
        let reply = "you did not provide any arguments, ${msg.author}!";
        if (command.usage) {
            reply += "\nThe proper usage would be: \"${prefix}${command.name} ${command.usage}\"";
        }
        return msg.channel.send(reply);
    }

    try {
        command.execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply("there was an error trying to execute that command!");
    }
}