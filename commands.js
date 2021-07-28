const fs = require('fs');
const Discord = require('discord.js');
const prefix = require('discord-prefix');
const client = require('./index').client;

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync(`./commands`);

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(`.js`));
    for(const file of commandFiles) {
        const commander = require(`./commands/${folder}/${file}`);
        client.commands.set(commander.name, commander);
    }
}

module.exports = async function (msg) {
    let guildPrefix;
    try {
        guildPrefix = prefix.getPrefix(msg.guild.id);

        if (!guildPrefix) guildPrefix = prefix.getPrefix();
    } catch {
        guildPrefix = prefix.getPrefix();
    }

    if (!msg.content.startsWith(guildPrefix) || msg.author.bot) return;

    const args = msg.content.slice(guildPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (msg.author.id == "841726953354297354") {
        console.log(`${msg.client.username} in ${msg.channel.id} sent: ${msg.content}`);
    }

    if (!msg.client.commands.has(commandName)) return;

    console.log(`${msg.author.username}(${msg.author.id}) in ${msg.channel.id} sent: ${msg.content}`);
    //console.log(client.commands.has(commandName));

    const command = msg.client.commands.get(commandName)
        || msg.client.command.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

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
        let reply = `You did not provide any arguments, ${msg.author}.`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return msg.channel.send(reply);
    }

    try {
        command.execute(msg, args);
    } catch (err) {
        console.error(err);
        msg.reply("there was an error trying to execute that command!");
    }
}