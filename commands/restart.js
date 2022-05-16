const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart'),
    async execute(client, msg, args) {
        
    },
};