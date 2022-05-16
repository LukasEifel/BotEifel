const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server'),
    async execute(message, args) {
        message.channel.send(`This server´s name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};