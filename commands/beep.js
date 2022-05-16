const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('returns boop'),
    async execute(message, args) {
        message.channel.send(`boop`)
    },
};