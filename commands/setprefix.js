const prefix = require('discord-prefix');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setprefix'),
    async execute(msg, args) {
        try {
            const guildId = msg.guild.id;
            const guildPrefix = args[0];

            prefix.setPrefix(guildPrefix, guildId);

            msg.reply(`the prefix for this bot is now ${guildPrefix}`);
        } finally {
            
        }
    },
};