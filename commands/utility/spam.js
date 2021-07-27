const { Console } = require('console');
const { MessageEmbed, SystemChannelFlags } = require('discord.js');

module.exports = {
    name: 'spam',
    guildOnly: false,
    usage: '[amount] [mention]',
    args: true,
    cooldown: 0,
    execute(message, args) {
        const client = require('../../bot').client;

        //console.log("[DEBUG] amount: " + args[0]);
        //console.log("[DEBUG] id: " + args[1]);

        for (i = 0; i < parseInt(args[0]); i++) {
            client.users.cache.get(args[1].replace(/[^0-9]/g, '')).send('SPAM');
        }
    },
};