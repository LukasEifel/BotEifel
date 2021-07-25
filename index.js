const fs = require('fs');
const Discord = require(`discord.js`);
module.exports = {varToExport: Discord};
const { prefix, token } = require(`./config.json`);

const client = new Discord.Client();
module.exports = {client: client};

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const running = true;

client.once('ready', () => {
    console.log(`[BOT] ONLINE: Logged in as ${client.user.tag}`);
    console.log(`[BOT] PREFIX: ${prefix}`)
});

client.on('message', message => {
    if(!message.author.bot && !message.content.startsWith(prefix)) return;

    console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}!`);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    console.log(client.commands.has(commandName));

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName)
        || client.command.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('You can not do this! You need the following permissions: ' +
            command.permissions);
        }
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name}${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);
