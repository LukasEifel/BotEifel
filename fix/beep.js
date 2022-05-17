const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('returns boop'),
    async execute(interaction) {
        message.channel.send(`boop`)
    },
};