const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'test',
    guildOnly: true,
    permissions: '',
    usage: '[mention]',
    execute(message, args) {
        const client = require('./../../index.js').client;
        const welcomeChannel = client.channels.cache.find(channel => channel.name === 'allgemein' || channel.name === 'general');
        var sembed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription('**test**');
        welcomeChannel.send(sembed);
    },
};