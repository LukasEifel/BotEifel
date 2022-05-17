const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Replies with pong!'),
    async execute(interaction) {
        
    },
};