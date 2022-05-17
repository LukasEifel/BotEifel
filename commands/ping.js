const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Interaction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    async execute(client, interaction) {
        try {
            const msg = await interaction.reply({ content: '**pong**', fetchReply: true });

            await interaction.editReply({ content: `**pong**\nBot Latency: \`${msg.createdTimestamp - interaction.createdTimestamp}ms\`, WebSocket Latency: \`${client.ws.ping}ms\``});
        } catch (error) {
            console.log('Something went wrong: ', error);
        }
    },
};