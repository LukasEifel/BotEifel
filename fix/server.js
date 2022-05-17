const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with pong!'),
    async execute(interaction) {
        message.channel.send(`This server´s name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};