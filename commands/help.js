const prefix = require('discord-prefix');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help'),
    async execute(message, args) {
        const data = [];
        const { commands } = message.client;

        let guildPrefix;
        try {
            guildPrefix = prefix.getPrefix(msg.guild.id);
            if (!guildPrefix) guildPrefix = prefix.getPrefix();
        } catch {
            guildPrefix = prefix.getPrefix();
        }

        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`{prefix}help [command name]\` to get info on a specific command!`);

            return message.channel.send(data, { split: true })
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if(command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if(command.description) data.push(`**Description:** ${command.description}`);
        if(command.usage) data.push(`**Usage:** ${guildPrefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    },
};